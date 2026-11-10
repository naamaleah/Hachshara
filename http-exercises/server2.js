const http = require('http');

const server = http.createServer((req, res) => {
    if(req.method === 'POST' &&req.headers['content-type'] === 'application/json') {
        res.end("JSON received");
    }else{
        res.end("Unsupported request");
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});