//basic async function
async function logAsync(text){
    return 'Hello';
}

logAsync()
    .then(result => console.log(result));

async function getResult(){
    const result = await logAsync();

    console.log(result);
}

getResult();        

async function getSwCharacters(){
    const url = 'https://swapi.dev/api/';

    const response = await fetch(url);
    const result = await response.json();

    console.log(result);
}

getSwCharacters();

