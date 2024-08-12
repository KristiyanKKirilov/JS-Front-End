// function solve(number){
//     let result = number * 2;
//     console.log(result);
// }

// solve(4);

// function printInfo(name, age, grade){
//     let info = `Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`;
//     console.log(info);
// }

// function solve(firstNumber, secondNumber, operator){
//     let result;
//     switch(operator){
//         case '+':
//             result = firstNumber + secondNumber;
//             break;
//         case '-':
//             result = firstNumber - secondNumber;
//             break;
//         case '*':
//             result = firstNumber * secondNumber;
//             break;
//         case '/':
//             result = firstNumber / secondNumber;
//             break;
//         case '%': 
//             result = firstNumber % secondNumber;
//             break;
//         case '**':
//             result = firstNumber ** secondNumber;
//             break;        
//     }
//     console.log(result);
// }

// function hackySolve(a,b,c){
//     let largest = Math.max(a,b,c);
//     console.log(`The largest number is ${largest}.`);
// }

// function solve(number){
//     if(number >= 5.50){
//         console.log('Excellent')
//     }
//     else{
//         console.log('Not excellent');
//     }
// }

function printMonth(number){
    switch(number){
        case 1:
            console.log('January');
            break;
        case 2:
            console.log('February');
            break;
        case 3:
            console.log('March');
            break;
        case 4:
            console.log('April');
            break;
        case 5:
            console.log('May');
            break;
        case 6:
            console.log('June');
            break;
        case 7:
            console.log('July');
            break;
        case 8:
            console.log('August');
            break;
        case 9:
            console.log('September');
            break;
        case 10:
            console.log('October');
            break;
        case 11:
            console.log('November');
            break;
        case 12:
            console.log('December');
            break;  
        default: 
        console.log('Error!');
        break;         
    }
}

printMonth(12);