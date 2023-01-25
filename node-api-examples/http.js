const http = require("http");

const server = http
  .createServer((req, res) => {
    console.log(req.url);
    if(req.url === "/") {
      res.writeHead(200, {"Content-Type": "text/html"})
      res.write("<h1>Hello Aaliyah! I love the way you rub me c:</h1>");
      res.end();
    } else if (req.url === "/home") {
      res.writeHead(200, {"Content-Type": "text/html"})
      res.write("<h1>Hello Aaliyah! You're HOME!!</h1>");
      res.end();
    } else {
      res.writeHead(404);
      res.end();
    }
  });

server.listen(8080);

export default server;