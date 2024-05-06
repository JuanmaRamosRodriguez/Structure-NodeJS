//Script llamado date que imprima la fecha actual (en bash o nodejs)
import {DateTime} from 'luxon'
console.log(DateTime.now().toFormat("dd-MM-yyyy"));