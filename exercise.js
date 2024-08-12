// function solve(number){
//     let result = number * 2;
//     console.log(result);
// }

// solve(4);

// function printInfo(name, age, grade){
//     let info = `Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`;
//     console.log(info);
// }

function solve(firstNumber, secondNumber, operator){
    let result;
    switch(operator){
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        case '%': 
            result = firstNumber % secondNumber;
            break;
        case '**':
            result = firstNumber ** secondNumber;
            break;        
    }
    console.log(result);
}