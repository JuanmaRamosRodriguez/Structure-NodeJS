//Crear un middleware para el control de errores que devuelva un error 500 con el mensajes
// 'Server Error'

import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('tiny'));

app.get('/*', function (req, res) {
  res.send('Hola pequeño Morgan!')
});

app.listen(3000);