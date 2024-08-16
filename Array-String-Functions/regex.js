//Regex literals
const pattern = /[A-Z][a-z]+/g;

//Regex class
const pattern2 = new RegExp('[A-Z][a-z]+', 'g');

//Regex methods
//test
const text = 'Lorem dolor, ipsum Dolor';
console.log(pattern.test(text));

//exec
const matches = pattern.exec(text);
console.log(matches);

//match - string method
const matchResult = text.match(pattern);
console.log(matchResult);

//matchAll 
const matchAllResult = text.matchAll(pattern);
for (const match of matchAllResult) {
    console.log(match);
}

//replace 
let replacedResult = text.replace(pattern, '*'.repeat(4));
console.log(replacedResult);

//split
let input ='first.second.third/fourth';
const resultArr = input.split(/[\.\/|]/g);
console.log(resultArr);