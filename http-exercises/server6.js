const http = require('http');

const server = http.createServer((req, res)=>{
    const headers = req.headers;

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(headers));
});

server.listen(3000, ()=>{
    console.log("server on");
});