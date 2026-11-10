const http = require('http');

const server = http.createServer((req, res) => {

    if(req.method === 'GET' && req.url === '/hello') {
        res.end("Hello from GET");
    }else 
        if(req.method === 'POST' && req.url === '/hello')
            res.end("Hello from POST");
    else{
        res.end("Not supported");
}
});


server.listen(3000, () =>{
    console.log("Server running on port 3000");
});