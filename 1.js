const ejss=require('ejs');
const fs=require('fs');
const str=ejss.renderFile('./views/1.ejs',
    {json:{arr:[{'name':'李四','age':23},
                {'name':'王五','age':28},
                {'name':'张三','age':25}]}},
                function (err,data) {
    console.log(data);
});
fs.writeFile('./views/form.html',str,function (err) {
    if (err){
        console.log('编译失败');
    }
});