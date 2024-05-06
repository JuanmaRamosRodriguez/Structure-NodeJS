//5. Devolver las páginas cargadas de un fichero .html en lugar de escritas en código.
const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('Animaciones.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
  
}).listen(3000);