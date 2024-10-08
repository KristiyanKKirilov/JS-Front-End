import os from 'os';//Core module 
import sum from './calculator.js'; //Internal module

console.log(`Hello from NodeJS ${os.EOL} new line`); 
console.log(sum(2,5));
