//Ejecutar y modificar los códigos de ejemplo
import fetch from 'node-fetch';

const vader = fetch("https://swapi.dev/api/planets/1/");
const luke = fetch("https://swapi.dev/api/planets/8/");
const c3po = fetch("https://swapi.dev/api/people/9/");

/*Promise.all([vaderP, lukeP, cP])
.then(responses => {
    responses.forEach(r => {
        r.json().then(starWars => {
            console.log(starWars.name)
        })
    });
});*/



async function start(vader, luke, c3po){


    try {
        const response = await fetch('https://swapi.dev/api/planets/1/');
        const data = await response.json()
        console.log(data.name);
    }catch (error){
        console.error('Error:', error.message);
    }
}

start()