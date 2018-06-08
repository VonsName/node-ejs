const ejs=require('ejs');
const expresStatic=require('express-static');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.listen(8080);
app.use(bodyParser.urlencoded({extended:false}));
app.use(expresStatic('./www'));
app.use('/',function (req,res) {

});

