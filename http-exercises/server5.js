const http = require('http');

const server = http.createServer((req, res)=>{
    res.end(`You used method:${req.method}`);
});

server.listen(3000, ()=>{
    console.log("surver on ");
});