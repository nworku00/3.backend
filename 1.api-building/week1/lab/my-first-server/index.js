const http = require("http");
const url = require('url')

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {

    console.log(req.url)

    const urlObj = url.parse(req.url, true);
    const pathName = urlObj.pathname;

    if (pathName === '/') {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hello World from HOME");
    } else if (pathName === '/message'){
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("Here is a message");
    } else if (pathName === '/lunch') {
        console.log(`This was a ${req.method} request.`)
        if (req.method === 'GET') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html')
            res.end(`
                <ul>
                <li>freedom fries</li>
                <li>bell peppers & ranch</li>
                <li>ketchup</li>
                </ul>
            `)
            console.log(pathName);
        } else if (req.method === 'POST') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html')
            res.end(`
                you don't have access
            `)
        }
    } 
    console.log(`a request came in from`, pathName);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
