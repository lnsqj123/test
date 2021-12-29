import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class App extends React.Component {
  state = {
    Array: [
      {
        latitude: 36.992350,
        longitude: 129.4017258,
      },
      {
        latitude: 36.9923036,
        longitude: 129.4010743,
      },
      {
        latitude: 36.991114,
        longitude: 129.4009765,
      },
      {
        latitude: 36.9904271,
        longitude: 129.4007294,
      },
      {
        latitude: 36.9896868,
        longitude: 129.3999556,
      },
      {
        latitude: 36.9902055,
        longitude: 129.399682,
      },
      {
        latitude: 36.99082,
        longitude: 129.3989501,
      },
      {
        latitude: 36.991309,
        longitude: 129.3985336,
      },
      {
        latitude: 36.9917718,
        longitude: 129.3979325,
      },
      {
        latitude: 36.9923956,
        longitude: 129.3975554,
      },
      {
        latitude: 36.9929117,
        longitude: 129.396766,
      },
      {
        latitude: 36.9934547,
        longitude: 129.396038,
      },
      {
        latitude: 36.9939258,
        longitude: 129.3960004,
      },
      {
        latitude: 36.9934689,
        longitude: 129.3958618,
      },
      {
        latitude: 36.9932609,
        longitude: 129.394856,
      },
      {
        latitude: 36.9928983,
        longitude: 129.401,
      },
      {
        latitude: 36.9927984,
        longitude: 129.4001856,
      },
    ],
    isLoading: true,
    movie: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({
      movies, isLoading: false
    })
  }
  getsnaptoload = async() => {
    var data = this.state.Array.map( (Arraydata) => (
      Arraydata.latitude + ',' + Arraydata.longitude
    ))
    await axios.get(`https://roads.googleapis.com/v1/snapToRoads?path=${data.join('|')}&interpolate=true&key=AIzaSyBJjeb1CqkQ6HQL8uHr1ottRRNLuLm11Ws`)
    .then(response => {
      this.setState(() => ({
        Array: response.data.snappedPoints
      }))
    })
    var data2 = this.state.Array.map(arraydata => (
      arraydata.location
    ))
    this.setState(() =>  ({
      Array: data2
    }))
    console.log(this.state.Array)
  }
  componentDidMount() {
    // this.getsnaptoload();
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                key={movie.key}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;