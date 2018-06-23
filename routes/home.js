var express = require('express');
var router = express.Router();

var mysqlPool = require('../mysql/mysql');

// 获取tips列表
router.get('/getTipsList', function(req,res,next){
    mysqlPool.getConnection(function(err,connection){
        connection.query('select * from test2 ORDER BY createtime DESC',function(err,result){
          if(result){
            res.send({data: result});
          }
          connection.release();
        });
    });
})
// 发送
router.post('/postTip', function(req,res,next){
    mysqlPool.getConnection(function(err,connection){
        connection.query('insert into test2(content) values (?)', [req.body.content],function(err,result){
          if(result){
            res.send({result: 'success'});
          }
          connection.release();
        });
    });
});


module.exports = router;
