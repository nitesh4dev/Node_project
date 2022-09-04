const http = require('http');
var url = require('url');

http.createServer((req,res)=>{
    console.log("runniing")
    let q = url.parse(req.url,true);
    let year = q.query.year;
    let name = q.query.name;
    let currYear = new Date().getFullYear();
    let age = currYear-year;
    res.write(`<p>hello ${name}</p><p> You are currently ${age} year old`);
    return res.end()
}).listen(8080);
