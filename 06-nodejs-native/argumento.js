//Realizar programa que reciba por argumentos el nombre de un fichero e imprima su contenido

const fs = require('fs');


const nombre = process.argv[2];
 try {
   const data = fs.readFileSync('./' + nombre, 'utf8')
   
   console.log(data);
   } catch (err) {
   console.error(err)
}