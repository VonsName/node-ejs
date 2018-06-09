const express=require('express');
const app=express();
const userRouter=express.Router();
/*app.route('/user').get(function (req,res) {
    res.send('22222');
});
app.route('/info').get(function (req,res) {
    res.send('3333');
});*/
userRouter.get('/info', function (req, res, next) {
    res.send('info');
    //next();
});
userRouter.get('/add', function (req, res, next) {
    res.send('add');
    //next();
});
app.use('/user',userRouter);
app.listen(8080);