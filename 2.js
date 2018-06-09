const ejs=require('ejs');
const expresStatic=require('express-static');
const express=require('express');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const fs=require('fs');
const path=require('path');
//整和模版引擎
const consolidate=require('consolidate');
//上传文件
const multer=require('multer');
const objMulter=multer({dest:'./www/upload'});
const app=express();

//app.use(bodyParser.urlencoded({extended:false}));
app.use(objMulter.any());
//app.use(expresStatic('./www'));
// app.use('/',function (req,res,next) {
// //     let f=req.files;//file数组
// //     console.log(path.parse(f[0].path));
// //     //重命名
// //     fs.rename(f[0].path,f[0].path+path.parse(f[0].originalname).ext,function (err) {
// //         if (err) {
// //             console.log('err');
// //         }
// //     });
// //     next();
// // });
//配置模版引擎
app.set('viewengine','html');
//模版文件的位置
app.set('views','./views');
//哪种模版引擎
app.engine('html',consolidate.ejs);
app.get('/index',function (req,res) {
    //指定模版文件的名字
    res.render('2.ejs');
})
app.listen(8080);

