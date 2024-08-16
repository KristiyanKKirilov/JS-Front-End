//escaping
const quoteText = 'Some"Text"';
console.log(quoteText);
const singleQuoteText = "Don't act like a fool";
console.log(singleQuoteText);
const escapeSingleQuote = 'Dont\'t mind the single quote\'';
console.log(escapeSingleQuote);

//concatenation
const firstString = 'A';
const secondString = 'B';
const ab = firstString + ' - ' + secondString;
const ab2 = `${firstString} - ${secondString}`;
const ab3 = firstString.concat(secondString);
console.log(ab);
console.log(ab2);
console.log(ab3);

//indexOf - searching for the first element matching the condition
const text = 'Lorem ipsum, dolor sit, dolor';
const firstDolorIndex = text.indexOf('dolor');
console.log(firstDolorIndex);

//indexOf = searching from starting index
const secondDolorIndex  = text.indexOf('dolor', 14);
console.log(secondDolorIndex);

//lastIndexOf - searching last element matching the condition
const secondDolorIndex2 = text.lastIndexOf('dolor');
console.log(secondDolorIndex2);

//substring - takes part of the string with given firstIndex as parameter and second is the end by default
const subText = text.substring(0, firstDolorIndex - 2);
console.log(subText);

//replace - replace the first occurance of the given parameter
const replaceDolor = text.replace('dolor', 'dolar');
console.log(replaceDolor);

//replaceAll - replace all occurances of the given parameter
const replaceAllDolor = text.replaceAll('dolor', 'dolar');
console.log(text);
console.log(replaceAllDolor);

//includes - checks if element exists
const hasDolor = text.includes('dolor');
console.log(hasDolor);

//trim 
const stringWithSpaces = '  some  text  ';
console.log(stringWithSpaces);
console.log(stringWithSpaces.trimEnd());
console.log(stringWithSpaces.trimStart());
console.log(stringWithSpaces.trim());
console.log(stringWithSpaces.trim().replace('  ', ' '));

//startsWith - endsWith
let nam = 'My name is John';
console.log(nam.startsWith('My'));
console.log(nam.endsWith('John'));

//Pad string - transform decimal to binary number
let number = 10;
let bin = number.toString(2);
console.log(bin);

//Pad string - transform decimal to hexadecimal number
let number1 = 10;
let hex = number1.toString(16);
console.log(hex);