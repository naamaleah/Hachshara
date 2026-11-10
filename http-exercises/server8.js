
const http = require('http');

const server = http.createServer((req, res) => {

    const myUrl = new URL(req.url, 'http://localhost:3000');

    const id = myUrl.searchParams.get('id');
    const type = myUrl.searchParams.get('type');
    const lang = myUrl.searchParams.get('lang');

    res.end(`ID: ${id}\nType: ${type}\nLanguage: ${lang}`);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
