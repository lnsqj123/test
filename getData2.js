
const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

const getData = async () => {
    try {
        return await axios.get("https://news.seoul.go.kr/welfare/archives/513105");
    } catch (error) {
        console.error(error);
    }
}

getData()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("table.route-datatable tbody").children("tr.show");
    
    $bodyList.each(function(i, elem) {
        if ($(this).find("p") == "") {
            ulList[i] = {
                dong: $(this).find("td").text(),
                place: $(this).find("td").next().text(),
                ads: $(this).find("td").next().next().text(),
                date: $(this).find("td").next().next().next().text(),
                check: $(this).find("td").next().next().next().next().text(),
                bigo: $(this).find("td.aLeft").text()
            };
        }
        else {
            ulList[i] = {
                Text: $(this).find("p").text()
            }
        }
        log(ulList[i])
    });

    return ulList;
})
.then(res => log(res));

