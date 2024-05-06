//1. Crear un servidor en NodeJS que devuelva Hello World! cuando se acceda al puerto 4000

const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.end("Hello World!\n");
}).listen(4000);