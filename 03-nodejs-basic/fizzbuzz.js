/**
*Programa que imprima los numeros desde el 1 hasta N
*Por cada vez que encuentre un múltiplo de 3 escribirá 'fizz'
*Cada vez que encuentre un múltiplo de 5 escribirá 'buzz'
*Si es múltiplo ambos escribirá 'fizzbuzz'
*/

function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 5 ===0){
            console.log('fizzbuzz')
        }else if ( i % 3 === 0 ){
            console.log('fizz');
        }else if (i % 5 ===0){
            console.log('buzz');
        }else{
            console.log(i);
        }
          
    }

}
fizzbuzz(20)
