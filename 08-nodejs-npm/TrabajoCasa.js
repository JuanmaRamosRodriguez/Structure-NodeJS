//Crear un programa que imprima la fecha actual, en formato dd-MM-YYYY HH:mm:ss y 
//se actualice cada segundo. Cada vez que los segundos se pongan a 0 o múltiplo 
//de 10, se pondrá en verde el tiempo (día excluido).

import {DateTime} from 'luxon';
import chalk from 'chalk';

function fechaActivity() {
    if (DateTime.now().second === 0 || DateTime.now().second % 10 === 0){
        return chalk.green(DateTime.now().toFormat("dd-MM-yyyy - HH:mm:ss"));
        } else{
            return DateTime.now().toFormat("dd-MM-yyyy HH:mm:ss");

    } 
}
    setInterval(() => {console.log(fechaActivity())}, 1000);