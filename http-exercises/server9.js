
const { URL } = require('url');

const urlStr = 'https://app.com/search?query=node&sort=asc';

const myUrl = new URL(urlStr);

// Change sort to desc
myUrl.searchParams.set('sort', 'desc');

// Add page=3
myUrl.searchParams.append('page', '3');

// Remove query
myUrl.searchParams.delete('query');

// Print final URL
console.log(myUrl.toString());
