import os from 'os';//Core module 
import sum from './calculator.js'; //Internal module
import calculator from 'calculator'; //External module

console.log(`Hello from NodeJS ${os.EOL} new line`); 
console.log(sum(2,5));

const f = calculator.func('f(x) = x*10 - 20');
console.log(f(3));

