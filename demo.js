let firstName = 'Pesho';

console.log('Mr.' + firstName);


let name = 'Steve';
let age = 18;
let isTrue = false;

//basic solve func

function solve(num1, num2){
    console.log(num1 + num2);
}

solve(1, 2);

console.log('My name is ' + name + '!');
console.log(`My name is ${name}!`);

let firstNumber = 3;
let secondNumber = 3.1456213; 

console.log(firstNumber.toFixed(2));
console.log(secondNumber.toFixed(2));

let maxPreciseNumber = Number.MAX_SAFE_INTEGER;
console.log(maxPreciseNumber);

let maxDoublePrecisionNumber = Number.MAX_VALUE;
console.log(maxDoublePrecisionNumber);

let nonANumber =  NaN;
let infinity = Infinity;

let singleQuoteLiteral = 'Sing';
let doubleQuoteLiteral = 'Double';
let templateLiteral = `Temp`;

let empty = null;
let unknown = undefined;

//BigInt

let bigNumber = BigInt('9007199254740992');
console.log(bigNumber);

let bigNumber2 = 9007199254740991n;

let parsedNum = Number('109');
console.log(parsedNum);


//Nan
console.log(Number('PO'));