//object literal
let cat = {name: 'Tom', age: 3};
console.log(cat);


//empty object
let person = {};
console.log(person);
person.name = 'Steve';
person.age = 20;
person.isMale = true;
console.log(person);
console.log(person.name)
console.log(person['name']);

person['town'] = 'Varna';
console.log(person.town);

//declare method in literal
let robot = {
    name: 'Sony',
    clean: function(){ //Function expression syntax
        console.log('Robot cleaning...');
    },
    cook: () => console.log('Cooking dinner...'), //Arrow function syntax
    wash(){ //Object methid notation
        console.log('Washing the floor...');
    }, 
    
};

console.log(robot);
robot.clean();
robot.cook();

//Object values
console.log(Object.keys(person));
console.log(Object.values(person));

//Object entries
const entries = Object.entries(person);
console.log(entries);

//from entries to object
const toObjectFromEntries = Object.fromEntries(entries);
console.log(toObjectFromEntries);

//object destructing
let { age, isMale} = person;
console.log(isMale);
console.log(age);

//object destruction but renaming properties
let {name: firstName, ...rest} = person;
console.log(firstName);
console.log(rest);
