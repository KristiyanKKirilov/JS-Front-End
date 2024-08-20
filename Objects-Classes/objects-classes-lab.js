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
        let [name, phoneNumber] = namePhoneAsString.split(" ");        
        phoneBook[name] = phoneNumber;
   }

  
   for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
   }
}
setPhoneNumberToPerson(['Tim 0834212554', 'Peter 0877547887','Bill 0896543112','Tim 0876566344']);

//5 - second (better) alternative
console.log('-5-2')
function setPhoneNumberToPerson2(input){
    let result = input.map(entry => entry.split(" "))
    .reduce((phoneBook, [name, phone]) => {
        phoneBook[name] = phone;
        return phoneBook;
    }, {})

    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}
setPhoneNumberToPerson2(['Tim 0834212554', 'Peter 0877547887','Bill 0896543112','Tim 0876566344']);

//6
console.log('-6-');

function scheduleMeetings(info){
    let meetings = {};
   
    for (const weekdayPersonAsString of info) {
        const weekdayPerson = weekdayPersonAsString.split(" ");
        const weekday = weekdayPerson[0];
        const person = weekdayPerson[1];
        const confictMessage = `Conflict on ${weekday}!`;
        const scheduledMessage = `Scheduled for ${weekday}`;
        if(meetings.hasOwnProperty(weekday)){
            console.log(confictMessage);
        }
        else{
            meetings[weekday] = person;
            console.log(scheduledMessage);
        }       
    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}

scheduleMeetings(['Monday Peter', 'Wednesday Bill','Monday Tim', 'Friday Tim']);


//7
console.log('-7-');

function printPersonNameAndAddress(info){
    let addressBook = {};
    for (const personAddressAsString of info) {
        const [person, address] = personAddressAsString.split(":");        
        addressBook[person] = address;
    }

    const keys = Object.keys(addressBook).sort((a,b) => a.localeCompare(b));
    for (const key of keys) {
        console.log(`${key} -> ${addressBook[key]}`);
    }
} 

printPersonNameAndAddress(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
    );

    //8
    console.log('-8-');

    function catInfoAndMeowing(catInfo){
        class Cat{
            constructor(name, age){
                this.name = name;
                this.age = age;
            }

            meow(){
                console.log(`${this.name}, age ${this.age} says Meow`);
            }
        }

        // for (const nameAge of catInfo) {
        //     const [name,age] = nameAge.split(" ");
        //     const cat = new Cat(name, age);
        //     cat.meow();
        // }
        catInfo
            .map(entry => entry.split(" "))
            .map(([name, age]) => new Cat(name,age))
            .forEach(cat => cat.meow());
    }

    catInfoAndMeowing(['Mellow 2', 'Tom 5']);

    //9
    console.log('-9-');

    function printSong(input){
        class Song{
            constructor(typeList, name, time){
                this.typeList = typeList;
                this.name = name;
                this.time = time;
            }

            printName(){
                 console.log(this.name);
            }
        }

        const songsCount = input.shift();
        const typeListFilter = input.pop();
        const allTypeList = 'all';

        if(typeListFilter === allTypeList){
            input.map(song => song.split('_'))
            .map(song => new Song(song[0], song[1], song[2]))
            .forEach(song => song.printName());
            
        }
        else{
            input.map(song => song.split('_'))
            .map(song => new Song(song[0], song[1], song[2]))
            .forEach(song => song.typeList === typeListFilter ? song.printName(): null);
        }      
    }

    printSong([4,
        'favourite_DownTown_3:14',
        'listenLater_Andalouse_3:24',
        'favourite_In To The Night_3:58',
        'favourite_Live It Up_3:48',
        'listenLater']
        );
