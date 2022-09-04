const http = require('http');
var url = require('url');

http.createServer((req,res)=>{
    console.log("runniing")
    let q = url.parse(req.url,true);
    let object = q.query.object;
    let metric = q.query.metric;
    let radius = q.query.radius;

    const areaVolume = (object , metric , radius)=>{
        let value;
       if(object == "circle"){
        (value = 3.14*Math.pow(radius , 2)).toFixed(2);
       }
       else if(object == "sphere" && metric == "volume"){
          value = (4/3*3.14*Math.pow(radius,3)).toFixed(2);
       }
       else{
        (value = 4*3.14*Math.pow(radius,2)).toFixed(2);
       }
       return value;
    }
    console.log(areaVolume)
    res.write(`<P>${metric} of the ${object} is ${areaVolume(object , metric , radius)}</P>`);
    return res.end()
}).listen(8080);
