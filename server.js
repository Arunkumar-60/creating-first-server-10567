const http = require("http");
//package import

const port = 8081;
//local port number

http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1> hello, this is from the server</h1>");
    response.end();
})
    .listen(port, () => { //callback function
        console.log(`Nodejs server started on port ${port}`);
    });

// http.//localhost:8081