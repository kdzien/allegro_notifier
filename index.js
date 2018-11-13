// const AllegroChecker = require('./AllegroChecker.js')
// const mailer = require('./Mailer.js')
// var schedule = require('node-schedule');
// const link = `https://allegro.pl/kategoria/obraz-i-grafika-karty-graficzne-257236?string=1050%20ti&stan=u%C5%BCywane&offerTypeBuyNow=1&order=p&bmatch=ss-base-relevance-floki-5-nga-hcp-wp-ele-1-2-0328&price_to=620`
// const product_name = 'GTX 1050 TI'


// runScript = () =>{
//     let product = new AllegroChecker(product_name,link)
//     product.getFromWebsite().then((auctions)=>{
//         product.setAuctions(auctions)
//         product.checkNews().then(isnew=>{
//             let message = "";
//             isnew ? message="Nowy produkt!" : message="Brak nowości";
//             mailer.sendNotification('dzieniu@gmail.com',message,product_name,()=>{
//                 console.log(`wyslano wiadomosc ${new Date()}`)
//             })
//         }).catch(err=>{
//             console.log(err)
//         })
//     }).catch(err=>{
//         console.log(err)
//     })
// }

// var j = schedule.scheduleJob('*/20 * * * **', runScript);
console.log("xd")