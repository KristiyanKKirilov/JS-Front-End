//1
console.log('-1-');
function minNum(firstNum, secondNum, thirdNum){
    const numbers = [firstNum, secondNum, thirdNum];
    console.log(Math.min(...numbers));
}

minNum(9,1,3);

//2
console.log('-2-')
function sumAndSubtract(firstNum, secondNum, thirdNum){
    const sum = (a, b) => a + b;
    const subtract = (c, d) => c - d;
    let totalSum = sum(firstNum, secondNum);
    totalSum = subtract(totalSum, thirdNum);
    console.log(totalSum);
}

sumAndSubtract(23, 6, 10);

//3 
console.log('-3-')

function returnASCIISequence(firstChar, secondChar){
    const firstCharUnicode = firstChar.charCodeAt(0);
    const secondCharUnicode = secondChar.charCodeAt(0);
    let output = '';
    let startIndex =  firstCharUnicode < secondCharUnicode ? firstCharUnicode : secondCharUnicode;
    let endIndex = startIndex !== firstCharUnicode ? firstCharUnicode : secondCharUnicode;
    for (let i = startIndex + 1; i < endIndex; i++) {
        let char = String.fromCharCode(i);
        output += `${char} `;        
    }

    console.log(output.trim());
}

returnASCIISequence('#', ':');


//4
console.log('-4-');

function evenOddSum(number){
    const numbers = number.toString().split("").map(num => parseInt(num));
    const even = element => element % 2 === 0;
    const odd = element => element % 2 !== 0;
    const evenElements = numbers.filter(even);
    const oddElements = numbers.filter(odd);
    const evenSum = evenElements.reduce((totalSum, currentValue) => totalSum + currentValue, 0);
    const oddSum = oddElements.reduce((totalSum, currentValue) => totalSum + currentValue, 0);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

evenOddSum(1000435);
