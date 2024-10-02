const http = require("http");

//Creating a server and responding with "Hello Node" on port 3000
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello Node!!!!</h1>\n");
});

server.listen(3000, () => {
  console.log("Server running at http: // localHost:3000");
});
