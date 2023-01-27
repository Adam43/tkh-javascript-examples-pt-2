const http = require("http");

const server = http
  .createServer((req, res) => {
    console.log(req.url);
    if(req.url === "/") {
      res.writeHead(200, {"Content-Type": "text/html"})
      res.write("<h1>Hello Kwame!</h1>");
      res.end();
    } else if (req.url === "/home") {
      res.writeHead(200, {"Content-Type": "text/html"})
      res.write("<h1>Hello Kwame! You're HOME!!</h1>");
      res.end();
     } else if (req.url === "/data") {
        res.writeHead(200, {"Content-Type": "application/json"})
        res.write(JSON.stringify({
          data:{
            name: "Kwame"
            }
          }));
        res.end();
    } else {
      res.writeHead(404);
      res.end();
    }
  });

//server.listen(8080);

module.exports = server;