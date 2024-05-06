//2. Crear un servidor en NodeJS que devuelva una página web (puerto 3000)
const http = require('http');
http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');

  res.end('<html><body><h1>Kamehameha !!</h1></body></html>');
}).listen(3000);