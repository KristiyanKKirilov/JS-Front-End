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


