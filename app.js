var http = require("http"),
    fs = require("fs");

const hostname = "127.0.0.1";
const port = 3001;

fs.readFile("src/index.html", function(err, html) {
    if (err) {
        throw err;
    }
    http
        .createServer(function(request, response) {
            response.writeHeader(200, { "Content-Type": "text/html" });
            response.write(html);
            response.end();
        })
        .listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
        });
});