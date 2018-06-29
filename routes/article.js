var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var marked = require('marked');

// 还原默认设置，转换html标签
// marked.setOptions({
//     renderer: new marked.Renderer(),
//     gfm: true,
//     tables: true,
//     breaks: false,
//     pedantic: false,
//     sanitize: true,
//     smartLists: true,
//     smartypants: false
//   });

var querystring = require('querystring');

var multipart = require('connect-multiparty');  // 中间件，对参数进行解析
var multipartMiddleware = multipart();

var mysqlPool = require('../mysql/mysql');

// 新增
router.post('/addArticle', multipartMiddleware, function(req,res,next){
    var filePath = path.join(__dirname, '../post', `${req.body.fileName}.md`);
    fs.readFile(filePath, 'utf8', function(err,data){
        if(err) {
            console.log(err);
            res.send({data: err, status: 0});
            return;
        }
        var dataResult = marked(data);
        mysqlPool.getConnection(function(err,connection){
            connection.query('insert into article(content,title) values (?,?)', [String(dataResult),req.body.title],function(err,data){
              if(data){
                res.send({data: data, status: 1});
              } else {
                  res.send({data: err, status: 0});
              }
              connection.release();
            });
        });
    })
})
// 获取列表
router.get('/getList', function(req,res){
    mysqlPool.getConnection(function(err,connection){
        connection.query('select id,title,createtime from article order by createtime desc',function(err,data){
            if(data){
                res.send({data: data, status: 1});
            } else {
                res.send({data: err, status: 0});
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
                res.send({data: data, status: 1});
            } else {
                res.send({data: err, status: 0});
            }
            connection.release();
        });
    });
})


module.exports = router;