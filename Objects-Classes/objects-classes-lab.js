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

    
}

printKeyValuePair({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);
