
const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

const getHtml = async () => {
    try {
        return await axios.get("https://www.yna.co.kr/sports/all");
    } catch (error) {
        console.error(error);
    }
};

getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("div.list-type038 ul.list").children("li");

    $bodyList.each(function(i, elem) {
      ulList[i] = {
          title: $(this).find('strong.tit-news').text(),
          summary: $(this).find('p.lead').text().slice(0, -11),
      };
    });

    const data = ulList.filter(n => n.title);
    return data;
  })
  .then(res => log(res));