const http = require("http");

// console.log(process.env.KEY)

const server = http.createServer((req, res) => {
  res.write("Hello World!");
  res.end();
});

console.log("Listening on port 3457...");

server.listen(3457);
