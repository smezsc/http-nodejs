//import { createServer } from 'http';
//
//createServer((req, res) => {
//  res.write('Hello World!');
//  res.end();
//}).listen(process.env.PORT);

let http = require('http')
let url = require('url')
let util = require('util')
let fs = require('fs')

let server = http.createServer((req,res) => {
  var pathname = url.parse(req.url).pathname
  console.log('file:'+pathname.substring(1))
  fs.readFile(pathname.substring(1),(err,data) =>{
    if(err){
      res.writeHead(404,{
        'Content-Type':'text/html'
      })
    }else{
      res.writeHead(200,{
        'Content-Type':'text/html'
      })
      res.write(data.toString())
    }
    res.end(util.inspect(url.parse(req.url)))
  })
})

server.listen(process.env.PORT);
