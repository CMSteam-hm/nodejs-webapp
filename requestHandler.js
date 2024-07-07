// requestHandler
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const handlerRequest = async (req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'index/html'});
            res.end(content);
        });
    } else if  (req.url === '/app.js') {
        fs.readFile(path.join(__dirname, 'public', 'app.js'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'application/javascript'});
            res.end(content);
        });
    } else if (req.url === '/data') {
        try {
            const response = await axios.get('https/jsonplaceholder.typicode.com/posts');
            res.writeHead(200, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify(response.data));
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify({ error: 'Error fetching data'}));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html'});
        res.end('<h1>404 Not Found</h1>');
      }
};

module.exports = handlerRequest;
