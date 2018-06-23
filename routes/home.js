var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var mysqlPool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'helloWorld',
    database: 'express_test'
});


/* GET home page. */
router.get('/index', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    // res.send({result: 'success'});
    mysqlPool.getConnection(function(err,connection){
        connection.query('INSERT INTO test2(content) VALUES (?)',['markdown_test'],function(err,result){
          console.log(result);
          if(result){
            res.send({type: 'success'});
          }
          connection.release();
        });
    });
});
router.get('/getmd', function(req,res,next){
    mysqlPool.getConnection(function(err,connection){
        connection.query('select * from test2',function(err,result){
          console.log(result);
          if(result){
            res.send({type: result});
          }
          connection.release();
        });
    });
})
router.post('/poststh', function(req,res,next){
    console.log(req.body);
    res.send({type: 'success'});
});

router.get('/markdown', function(req, res) {  
    res.render('index.md',{layout:false});
}) 

module.exports = router;
