
const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

const getData = async () => {
    try {
        return await axios.get("https://www.seoul.go.kr/coronaV/coronaStatus.do");
    } catch (error) {
        console.error(error);
    }
}

getData()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("table.route-datatable tbody").children("tr.patient");
    
    $bodyList.each(function(i, elem) {
        ulList[i] = {
            number: $(this).find("p.corona19_no").text(),
            shopnum: $(this).find("td.name").text(),
            check: $(this).find("td.name").next().text(),
            date: $(this).find("td.name").next().next().text(),
            place: $(this).find("td.name").next().next().next().text(),
            lotation: $(this).find("td.name").next().next().next().next().text()
        };
    });

    return ulList;
})
.then(res => log(res));

