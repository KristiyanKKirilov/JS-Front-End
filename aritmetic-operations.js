console.log(5 + 5); //10
console.log(5 + '5'); //55
console.log('5' + 5); //55
console.log(1 + 2 + '3'); //33     
console.log('1' + 2 + 3); // 123

//division
console.log(9/2); //4.5

//module division
console.log(9%2); //1

//exponentiation
console.log(10 ** 2); //10^2 = 100

let a = 5;
let b = '5';
console.log(a === b ? 'Coersion' : 'Not coersion')

console.log(Boolean('Pes'));
console.log(!'Pes');


//thruthy values
console.log(Boolean(1));
console.log(Boolean('a'));
console.log(Boolean([]));
console.log(Boolean({}));


//falsy values
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));


//return second value if statement is true
let c= 5;
let v=6;
console.log(c && v);

console.log('c' || 'v');
console.log('' || 'v');