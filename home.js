const os = require('os');
console.log(os.freemem()/(1024*1024*1024));
console.log(os.totalmem()/(1024*1024*1024));
console.log(os.hostname());
console.log(os.platform());
console.log(os.userInfo());









// const mongoose = require('mongoose');

// mongoose.connect();
// const productSchema = new mongoose.Schema({
//     name: String,
//     price:Number,
//     brand:String,
//     catogery:String
// });

// const saveInDB = async ()  =>{
//     const Product = mangoose.model('products',productSchema);
//     let data = new productSchema({
//         name:"Iphone x pro",
//         price:"1,50,000",
//         brand:"Iphone",
//         catogery:"Mobile"
//     });
//     const result = await data.save();
// }