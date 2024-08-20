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

//5
console.log('-5-');

function setPhoneNumberToPerson(phoneBookAsString){
   let phoneBook = {};
   for (const namePhoneAsString of phoneBookAsString) {
        let namePhone = namePhoneAsString.split(" ");
        const name = namePhone[0];
        const phoneNumber = namePhone[1];
        phoneBook[name] = phoneNumber;
   }

   const entries = Object.entries(phoneBook);
   for (const entry of entries) {
        console.log(`${entry[0]} -> ${entry[1]}`);
   }
}

setPhoneNumberToPerson(['Tim 0834212554', 'Peter 0877547887','Bill 0896543112','Tim 0876566344']);
