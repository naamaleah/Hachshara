
const { URL } = require('url');

const urlStr = 'http://localhost:3000/users/list?role=admin&active=true#top';

const myUrl = new URL(urlStr);

console.log("Hostname:", myUrl.hostname);
console.log("Pathname:", myUrl.pathname);
console.log("Protocol:", myUrl.protocol);
console.log("Query:", myUrl.search);
console.log("Hash:", myUrl.hash);
