(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},55:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),i=a.n(o),l=a(7),s=a(1),u=a(10),c=a.n(u),m=a(16),d=a(11),p=a(12),g=a(14),v=a(13),f=a(17),y=a.n(f);a(55);var h=function(e){var t=e.id,a=e.year,n=e.title,o=e.summary,i=e.poster,s=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(l.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:o,poster:i,genres:s}}},r.a.createElement("img",{src:i,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},s.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},o.slice(0,180),"..."))))},E=(a(61),function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={Array:[{latitude:36.99235,longitude:129.4017258},{latitude:36.9923036,longitude:129.4010743},{latitude:36.991114,longitude:129.4009765},{latitude:36.9904271,longitude:129.4007294},{latitude:36.9896868,longitude:129.3999556},{latitude:36.9902055,longitude:129.399682},{latitude:36.99082,longitude:129.3989501},{latitude:36.991309,longitude:129.3985336},{latitude:36.9917718,longitude:129.3979325},{latitude:36.9923956,longitude:129.3975554},{latitude:36.9929117,longitude:129.396766},{latitude:36.9934547,longitude:129.396038},{latitude:36.9939258,longitude:129.3960004},{latitude:36.9934689,longitude:129.3958618},{latitude:36.9932609,longitude:129.394856},{latitude:36.9928983,longitude:129.401},{latitude:36.9927984,longitude:129.4001856}],isLoading:!0,movie:[]},e.getMovies=Object(m.a)(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e.getsnaptoload=Object(m.a)(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.Array.map((function(e){return e.latitude+","+e.longitude})),t.next=3,y.a.get("https://roads.googleapis.com/v1/snapToRoads?path=".concat(a.join("|"),"&interpolate=true&key=AIzaSyBJjeb1CqkQ6HQL8uHr1ottRRNLuLm11Ws")).then((function(t){e.setState((function(){return{Array:t.data.snappedPoints}}))}));case 3:n=e.state.Array.map((function(e){return e.location})),e.setState((function(){return{Array:n}})),console.log(e.state.Array);case 6:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(h,{key:e.key,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(62);function b(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"),r.a.createElement("span",null,"\u2212 George Orwell, 1984"))}var _=function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),a}(r.a.Component);a(63);function k(){return r.a.createElement("div",{className:"nav"},r.a.createElement(l.b,{to:"/"},"Home"),r.a.createElement(l.b,{to:"/about"},"About"))}a(64);function N(){return r.a.createElement(l.a,null,r.a.createElement(k,null),r.a.createElement(s.a,{path:"/",exact:!0,component:E}),r.a.createElement(s.a,{path:"/about",component:b}),r.a.createElement(s.a,{path:"/movie/:id",component:_}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.c58447bd.chunk.js.map