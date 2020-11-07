// deletex.js
const fetch = require('node-fetch');

let jokeUrl = 'https://krdo-joke-registry.herokuapp.com/api/services';

async function deLete(url, objekt) {
    let respons = await fetch(url, {
        method: "DELETE",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function main(url) {
    try {
        let respons = await deLete(url, { address: 'https://jokesitefinale.herokuapp.com/', secret: 'kikærte'});

        console.log(respons);
    } catch (fejl) {
        console.log(fejl);
    }
    process.exit();
}
main(jokeUrl);