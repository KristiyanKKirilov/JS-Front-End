//1
console.log('-1-');

function setPersonalInfo(firstName, lastName, age){
    let person = {
        firstName,
         lastName,
          age,
        };

    // let keys = Object.keys(person);
    // let values = Object.values(person);
    let entries = Object.entries(person);
    for (const keyValuePair of entries) {
        console.log(`${keyValuePair[0]}: ${keyValuePair[1]}`);     
    }

    // for (let i = 0; i < keys.length; i++) {
    //     console.log(`${keys[i]}: ${values[i]}`);        
    // }
   
}

setPersonalInfo("Peter","Pan", "20");
