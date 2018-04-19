const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const request_options = {
    headers: {'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}
}

class AllegroChecker{
    constructor(produkt,link){
        this.produkt=produkt;
        this.link=link;
        this.auctions =[];
    }
    getFromWebsite(){
        let addAuction = this.setAuctions();
        let link = this.link
        let temp_auctions = [];
        return new Promise((resolve,reject)=>{
            request(link,request_options, function(error, response, html){
                if(error){reject(error)}
                let $ = cheerio.load(html)
                $(".fa72b28 ").each((i,elem)=>{
                    let name_ = $(elem).find('._342830a').text().trim()
                    let aid = $(elem).find('._342830a').find('a').attr('href').trim();
                    temp_auctions.push({name:name_,auction_id:aid})
                    if(i==$(".fa72b28 ").length-1){
                        resolve(temp_auctions)
                    }
                })
            })
        })
    }
    setAuctions(auctions){
        this.auctions = auctions;
    }
    checkNews(){
        return new Promise((resolve,reject)=>{
            let isNews = false;
            let temp_auctions = this.auctions;
            fs.readFile('auctions.json', 'utf8', function readFileCallback(err, data){
                if (err){
                    reject(err)
                } else{
                    let obj = JSON.parse(data);
                    function containsObject(obj,list){
                        var i;
                        for (i = 0; i < list.length; i++) {
                            if (list[i].auction_id === obj) {
                                return true;
                            }
                        }
                        return false;
                    }
                    temp_auctions.forEach((elem_o,i)=>{
                        if(!containsObject(elem_o.auction_id,obj.auctions)){
                            isNews=true;
                            obj.auctions.push(elem_o)
                        }
                    })
                    let json = JSON.stringify(obj); 
                    fs.writeFile('auctions.json', json, 'utf8', ()=>{
                        resolve(isNews)
                    });  
            }});
        })
    }
}

module.exports = AllegroChecker;