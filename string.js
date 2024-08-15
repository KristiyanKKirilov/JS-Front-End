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