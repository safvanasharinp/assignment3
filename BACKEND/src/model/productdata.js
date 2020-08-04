
const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/productDb');
const Schema=mongoose.Schema;

var NewProductSchema=new Schema({
    productId:Number,
    productName:String,
    productCode:String,
    releaseDate:String,
    description:String,
    price:Number, 
    starRating:Number,
    imageUrl:String

});
var productdata=mongoose.model('productdata',NewProductSchema,'productdata');
module.exports=productdata;