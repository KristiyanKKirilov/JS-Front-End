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
    
};

console.log(robot);
robot.clean();
robot.cook();
