const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("version:", req.httpVersion);

    res.end("Request received");
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});