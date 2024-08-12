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

// function printMonth(number){
//     switch(number){
//         case 1:
//             console.log('January');
//             break;
//         case 2:
//             console.log('February');
//             break;
//         case 3:
//             console.log('March');
//             break;
//         case 4:
//             console.log('April');
//             break;
//         case 5:
//             console.log('May');
//             break;
//         case 6:
//             console.log('June');
//             break;
//         case 7:
//             console.log('July');
//             break;
//         case 8:
//             console.log('August');
//             break;
//         case 9:
//             console.log('September');
//             break;
//         case 10:
//             console.log('October');
//             break;
//         case 11:
//             console.log('November');
//             break;
//         case 12:
//             console.log('December');
//             break;  
//         default: 
//         console.log('Error!');
//         break;         
//     }
// }

// printMonth(12);

// function calcPrice(partOfWeek, age){
//     let price;
//     switch(partOfWeek){
//         case 'Weekday':
//             if(age >= 0 && age <= 18){
//                 price = 12;
//             }
//             else if(age > 18  && age  <= 64){
//                 price = 18;
//             }
//             else if(age > 64 && age <= 122){
//                 price = 12;
//             }
//             break;
//         case 'Weekend':
//             if(age >= 0 && age <= 18){
//                 price = 15;
//             }   
//             else if(age > 18  && age <= 64){
//                 price = 20;
//             }
//             else if(age > 64 && age <= 122){
//                 price = 15;
//             }
//             break;
//         case 'Holiday':
//             if(age >= 0 && age <= 18){
//                 price = 5;
//             }
//             else if(age > 18  && age <= 64){
//                 price = 12;
//             }
//             else if(age > 64 && age <= 122){
//                 price = 10;
//             }        
//             break;
            

//     }
//     if(price){
//         console.log(`${price}$`);
//     }
//     else{
//         console.log('Error!');
//     }
        

// }

// calcPrice('Weekday', 42);

// function calcArea(input){
//     let result;

//     let typeofInput = typeof(input);
//     if(typeofInput === 'number'){
//         result = Math.pow(input, 2) * Math.PI;
//         console.log(result.toFixed(2));
//     }
//     else{
//         console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`)
//     }
// }


// function calc(number){
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${number} X ${i} = ${number * i}`);
//     }
// }

// calc(5);

// 1


// function loop(firstNum, secondNum){
//     let sum = 0 ;
//     let output = "";
//     for(let i = firstNum; i <= secondNum; i++ ){
//         output += `${i} `;
//         sum += i;
//     }

//     console.log(output.trim());
//     console.log(`Sum: ${sum}`);
// }   

// loop(5, 10);

function sum(number){
    console.log(
        number
        .toString()
        .split("")
        .map(Number)
        .reduce((a,b) => a + b, 0)
    );

}

sum(543);

// function combine(first, second, third){
//     let str = first + second + third;
//     console.log(str);
// }

// combine('A', 'B', 'C');