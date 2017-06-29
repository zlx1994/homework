/**
 * Created by john on 2017/6/29.
 */
var http=require("http");
var fs=require('fs');


http.createServer(function (req,res) {
console.log(req.url)
var url=req.url;
switch (url){
    case '/index.html':
        fs.readFile("index.html","utf-8",function (err,data) {
            if(err){
                console.log("读取失败");
                console.log(err);
            }else{
                res.writeHead(200,{'content-type':'text/html;charset=utf8'});
                res.end(data);
            }
        });
        break;
    case '/log.html':
        fs.readFile("log.html","utf-8",function (err,data) {
            if(err){
                console.log("读取文件出错");
                console.log(err);
            }else{
                res.writeHead(200,{'content-type':'text/html;charset=utf8'});
                res.end(data);
            }
        });
        break;

    case '/img.html':

        fs.readFile("img.html","utf-8",function (err,data) {
            if(err){
                console.log("读取文件出错");
                console.log(err);
            }else{
                res.writeHead(200,{'content-type':'text/html;charset=utf8'});
                res.end(data);
            }
        });
        break;
    case '/1.jpg':
        fs.readFile("1.jpg",function (err,data) {
            if(err){
                console.log("读取文件出错");
                console.log(err);
            }else{
                res.writeHead(200,{'content-type':'image/jpg'});
                res.end(data);
            }
        });
        break;
    case '/index.js':
        fs.readFile("index.js",function (err,data) {
            if(err){
                console.log("文件读取失败");
                console.log(err);
            }else{
                res.writeHead(200,{'content-type':'text/javascript'});
                res.end(data);
            }
        });
        break;
    case '/css':
        fs.readFile("index.css","utf-8",function (err,data) {
            if(err){
                console.log("文件读取失败");
                console.log(err);
            }else{
                res.writeHead(200,{"content-type":'text/css;charset=utf8'});
                res.end(data);
            }
        })
        break;
    default:
        res.end("404 NOT FOUND");
}
}).listen(3000);
var MIME_TYPE = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml"
};
