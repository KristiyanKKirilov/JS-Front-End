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

//5
console.log('-5-');

function palindrome(numbers){
    const arr = numbers.map(num => num.toString());

    for (const element of arr) {
        let elem = element.split("");
        let reversed = elem.slice().reverse().join("");
        if(element === reversed){
            console.log(true);
        }
        else{
            console.log(false);
        }
    }
}

palindrome([123,323,421,121]);

//6
console.log('-6-');

function passwordValidator(password){
    
    function hasCorrectLength(pass){
        const minLength = 6;
        const maxLength = 10;

        return pass.length >= minLength && pass.length <= maxLength;
    }

    function hasValidCharacters(pass){
        const regex = /^[A-za-z\d]+$/;
        return regex.test(pass);
    }

    function minimalDigitCount(pass){
        const regex = /[0-9]{2,}/;
        return regex.test(pass);
    }
    let messages = [];

    if(!hasCorrectLength(password)){
        messages.push("Password must be between 6 and 10 characters");       
    }
    if(!hasValidCharacters(password)){
        messages.push("Password must consist only of letters and digits");      
    }
    if(!minimalDigitCount(password)){
        messages.push("Password must have at least 2 digits");        
    }
    
    if(messages.length === 0){
        messages.push("Password is valid");
    }
    
    messages.forEach((msg) => console.log(msg));
}

passwordValidator('MyPass123');

//7
console.log('-7-');
function printMatrix(number){
    let matrix = [];
    
    for (let i = 0; i < number; i++) {
        matrix[i] = [];

        for (let j = 0; j < number; j++) {
            matrix[i][j] = number;
        }
    }

    for (let i = 0; i < number; i++) {
        let output = "";

        for (let j = 0; j < number; j++) {
            output += `${matrix[i][j]} `;
        }

        console.log(output.trimEnd());
    
    }
}

printMatrix(3);

//7 - second option

function printNxMatrix(x){
    const getNumberNTimes = (number, separator = " ") => {
        return `${number}${separator}`.repeat(number).trim();
    };

    for (let i = 0; i < x; i++) {
        console.log(getNumberNTimes(x));        
    }
}

printNxMatrix(9);


