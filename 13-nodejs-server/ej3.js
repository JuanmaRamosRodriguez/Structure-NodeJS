//3. Crear un servidor en NodeJS que tenga distintas páginas según la URL accedida.
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
        switch (req.url) {
            case "/Page1":
                res.writeHead(200);
                res.end('<html><body><h1>Kamehameha !!</h1></body></html>');
                break;

            case "/Page2":
                res.writeHead(200);
                res.end('<html><body><h1>Rasengan !!</h1></body></html>');
                break;
    }
}).listen(3000);

