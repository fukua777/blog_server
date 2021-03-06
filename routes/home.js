var express = require('express');
var router = express.Router();

var mysqlPool = require('../mysql/mysql');

// 获取tips列表
router.get('/getTipsList', function(req,res,next){
    mysqlPool.getConnection(function(err,connection){
        connection.query('select * from home_tip ORDER BY createtime DESC',function(err,result){
          if(result){
            res.send({data: result, status: 1});
          } else {
            res.send({data: err, status: 0});
          }
          connection.release();
        });
    });
})
// 发送
router.post('/postTip', function(req,res,next){
    mysqlPool.getConnection(function(err,connection){
        connection.query('insert into home_tip(content) values (?)', [req.body.content],function(err,result){
          if(result){
            res.send({data: null, status: 1});
          } else {
            res.send({data: err, status: 0});
          }
          connection.release();
        });
    });
});


module.exports = router;
