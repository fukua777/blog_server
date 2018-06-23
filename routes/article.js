var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var marked = require('marked');

var mysqlPool = require('../mysql/mysql');

// 新增
router.post('/addArticle', function(req,res,next){
    var filePath = path.join(__dirname, '../post', req.body.fileName);
    console.log(req.body);
    fs.readFile(filePath, 'utf8', function(err,data){
        if(err) {
            console.log(err);
            return;
        }
        var dataResult = marked(data);
        mysqlPool.getConnection(function(err,connection){
            connection.query('insert into article(content,title) values (?,?)', [String(dataResult),req.body.title],function(err,result){
              if(result){
                res.send({result: 'success'});
              } else {
                  console.log(err);
                  res.send({result: err});
              }
              connection.release();
            });
        });
    })
})
// 获取列表
router.get('/getList', function(req,res){
    mysqlPool.getConnection(function(err,connection){
        connection.query('select id,title,createtime from article',function(err,data){
            if(data){
                res.send({result: data});
            } else {
                console.log(err);
                res.send({result: err});
            }
            connection.release();
        });
    });
})
// 获取详情
router.get('/getDetail', function(req,res){
    console.log(req);
    mysqlPool.getConnection(function(err,connection){
        connection.query('select * from article where id = ?', [req.query.id],function(err,data){
            if(data){
                res.send({result: data});
            } else {
                console.log(err);
                res.send({result: err});
            }
            connection.release();
        });
    });
})


module.exports = router;