const http = require('http');
const fs = require('fs');

http.createServer((req, res)=> {
    
  fs.readFile('fs_module/vegetables.json', (err, data)=> {
    res.write(data);
    return res.end();
  });

}).listen(8080);