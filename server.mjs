import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware'
const router = Router();

const options = {
    target: 'https://chat.openai.com', // target host
    changeOrigin: true, // needed for virtual hosted sites
    pathRewrite: {
       [`^/aaaaaa`]: '',
    }, // rewrites our endpoints to '' when forwarded to our target
}
router.get('/all', createProxyMiddleware(options));
//import { createServer } from 'http';
//
//createServer((req, res) => {
//  res.write('Hello World!');
//  res.end();
//}).listen(process.env.PORT);

//import http from 'http'
//import url  from 'url'
//import util from 'util'
//import fs   from 'fs'
//
//let server = http.createServer((req,res) => {
//    res.writeHead(301, { Location: "http://chat.openai.com" });
//    res.end();
//})

//let server = http.createServer((req,res) => {
//  var pathname = url.parse(req.url).pathname
//  console.log('file:'+pathname.substring(1))
//  fs.readFile(pathname.substring(1),(err,data) =>{
//    if(err){
//      res.writeHead(404,{
//        'Content-Type':'text/html'
//      })
//    }else{
//      res.writeHead(200,{
//        'Content-Type':'text/html'
//      })
//      res.write(data.toString())
//    }
//    res.end(util.inspect(url.parse(req.url)))
//  })
//})

//server.listen(process.env.PORT);
