const ejs=require('ejs');
const expresStatic=require('express-static');
const express=require('express');
const bodyParser=require('body-parser');
const fs=require('fs');
const path=require('path');
//上传文件
const multer=require('multer');
const objMulter=multer({dest:'./www/upload'});
const app=express();

//app.use(bodyParser.urlencoded({extended:false}));
app.use(objMulter.any());
//app.use(expresStatic('./www'));
app.use('/',function (req,res,next) {
    let f=req.files;//file数组
    console.log(path.parse(f[0].path));
    fs.rename(f[0].path,f[0].path+path.parse(f[0].originalname).ext,function (err) {
        if (err) {
            console.log('err');
        }
    });
    next();
});
app.listen(8080);

