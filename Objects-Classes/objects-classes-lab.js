//1
console.log('-1-');

function setPersonalInfo(firstName, lastName, age){
    let person = {
        firstName,
         lastName,
          age,
        };

        return person; 
}

setPersonalInfo("Peter","Pan", "20");

//2
console.log('-2-');

function printKeyValuePair(object){ 
    let entries = Object.entries(object);
    for (const keyValuePair of entries) {
        console.log(`${keyValuePair[0]} -> ${keyValuePair[1]}`);     
    }

    //2
    console.log('-2-');
    let keys = Object.keys(object);
    for (const key of keys) {
        console.log(`${key} -> ${object[key]}`)
    }
    
}

printKeyValuePair({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);

//3
console.log('-3-');

function deserializeJSON(json){
    const obj = JSON.parse(json);
    const entries = Object.entries(obj);
    for (const entry of entries) {
        console.log(`${entry[0]}: ${entry[1]}`);
    }
}

deserializeJSON('{"name": "George", "age": 40, "town": "Sofia"}');

//4
console.log('-4-');

function serializeObject(name, lastName, hairColor){
    const person = {
        name, 
        lastName,
        hairColor
    };
    const json = JSON.stringify(person);
    console.log(json);
}

serializeObject('George', 'Jones', 'Brown');