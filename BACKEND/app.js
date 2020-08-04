const express=require('express');
const Productdata=require('./src/model/productdata');
const cors=require('cors');
var bodyparser=require('body-parser');

//const { urlencoded } = require('body-parser');

//updatedata=require('./src/routes/updatedata.js')

var app=new express();
//app.use(urlencoded({extended:true}));
//app.use('/products',updatedata);


app.use(cors());
app.use(bodyparser.json())

app.get('/products',function(req,res){
    
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS')
    Productdata.find()
    .then((products)=>{
       // console.log(products);
        res.send(products);
        
    });
});
app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE');
    console.log(req.body);
    var product={
        productId:req.body.product.productId,
        productName:req.body.product.productName,
        productCode:req.body.product.productCode,
        releaseDate:req.body.product.releaseDate,
        description:req.body.product.description,
        price:req.body.product.price,
        starRating:req.body.product.starRating,
        imageUrl:req.body.product.imageUrl
    }
    console.log(product)
    var product=new Productdata(product);
    product.save();
});
app.post('/remove',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE');
    var prod=req.body.product;
    console.log("delete"+prod);
    Productdata.deleteOne({_id:prod})
    .then(function(){console.log("deleted")})
})



app.post('/update',function(req,res){
    res.header("responseText","*")
        res.header("Acess-Control-Allow-Origin","*")
        
        res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
        
        console.log(req.body.product);
        id=req.body.product.id
       // console.log(products);
        item={
            productId1:req.body.product.id,
            productName:req.body.product.name,
            productCode:req.body.product.code,
            releaseDate:req.body.product.date,
            description:req.body.product.desc,
            price:req.body.product.price,
            starRating:req.body.product.rating,
            imageUrl:req.body.product.image
        }
        console.log("item is "+item.productId1)
        if(item.productId1!=null){
             Productdata.findOneAndUpdate({productId:id},{"$set":{productId:item.productId1}})
             .then(function(product){
                product.save()
               // res.send("successfully updated")
             })
        
        }
        if(item.productName!=null){
            Productdata.findOneAndUpdate({productId:id},{"$set":{productName:item.productName}})
            .then(function(product){
                product.save()
               // res.send("successfully updated")
            })
        }
        if(item.productCode!==null){
            Productdata.findOneAndUpdate({productId:id},{"$set":{productCode:item.productCode}})
            .then(function(product){
                product.save()
                //res.send("successfully updated")
            })
        }
        if(item.releaseDate!==null){
            Productdata.findOneAndUpdate({productId:id},{"$set":{releaseDate:item.releaseDate}})
            .then(function(product){
                product.save()
               // res.send("successfully updated")
            })
        }
        if(item.description!==null){
            Productdata.findOneAndUpdate({productId:id},{"$set":{description:item.description}})
            .then(function(product){
                product.save()
               // res.send("successfully updated")
            })
        }
        if(item.starRating!==null){
            product=Productdata.findOneAndUpdate({productId:id},{"$set":{starRating:item.starRating}})
            .then(function(product){
          
                product.save()
               // res.send("successfully updated")
            })
        }
        if(item.imageUrl!==null){
            Productdata.findOneAndUpdate({productId:id},{"$set":{imageUrl:item.imageUrl}})
            .then(function(product){
                product.save()
               // res.send("successfully updated")
            })
        
        }
    
        })


app.listen(3000,function(){
    console.log("app listening port 3000");

})
        
