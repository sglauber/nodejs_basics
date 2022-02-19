// An http request;
const http = require('http');
const PORT = 8080;

const server = http.createServer((req, res) => {
  if(req.url === "/home"){
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hi mom!</h1>");
  }
  if(req.url === "/users"){
    const users = [
      {
        name: "Glauber S Santana",
        email: "glauber@lonen.io"
      },
      {
        name: "Lonen.Dev",
        email: "lonen@lonen.io"
      },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(PORT, () => console.log(`Listening at ${PORT}!`));