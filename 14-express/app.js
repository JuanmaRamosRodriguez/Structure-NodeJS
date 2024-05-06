/*1. Crear un proyecto donde ejecutar todos los apartados de la sección Como empezar de la web
oficial de ExpressJS*/
import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/', function (req, res) {
    res.send('Got a POST request');
});

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});

app.use('/static',express.static('imagen'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
