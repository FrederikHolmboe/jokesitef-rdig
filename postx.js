// postx.js
const fetch = require('node-fetch');

let jokeUrl = 'https://krdo-joke-registry.herokuapp.com/api/services';

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 200) // Created
        throw new Error(respons.status);
    return await respons.json();
}

async function main(url) {
    try {
        let respons = await post(url, { name: 'Bord 6 Joke service', address: 'https://jokesitefinale.herokuapp.com/', secret: 'kikærte'});
        console.log(respons);
    } catch (fejl) {
        console.log(fejl);
    }
    process.exit();
}
main(jokeUrl);