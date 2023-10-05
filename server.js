const http = require("http");

// // console.log(process.env.KEY)

// const server = http.createServer((req, res) => {
//   res.write("Hello World!");
//   res.end();
// });

console.log("Listening on port 8080...");

// server.listen(3457);

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
  })
  .listen(8080);
