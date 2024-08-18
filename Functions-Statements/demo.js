//function declaration
function print(text){
    console.log(text);
}

//function invocation
print('text');

//function hoisting
print2('text2');
function print2(text){
    console.log(text);
}

//function expression
//anonymous function
const subtract = function (a,b){
    console.log(a - b);
};

subtract(5,4);

//no parameter function
function printLine(){
    console.log('-------');
}

printLine();

//function as refference type
function executeOperation(operation, operandOne, operandTwo){
    const result = operation(operandOne, operandTwo);
    return result;
}

function sum(a,b){
    return a + b;
}

function subtraction(a,b){
    return a -b ;
}

function divide(a, b){
    return a / b;
}

function multiply(a,b){
    return a * b;
}
console.log(executeOperation(multiply, 4, 5));

//pass anonymous function as argument
const operationReesylt = executeOperation(function(a,b){
    return a + b;
}, 10, 20);

console.log(operationReesylt);

//pass arrow function as argument
const opRes = executeOperation((a,b) => a * b, 2,3);
console.log(opRes);

//function assignment
const divided = (a,b) => a /b;
console.log(divided(9,3));

//returned by antoher function
function buildOperator(opName){
    switch(opName){
        case 'sum':
            return function(a,b){
                return a + b;
            };
        default: break;
    }
}

const sumOp = buildOperator('sum');
console.log(sumOp(1,3));

//normal function
const double = function (number){
    return number * 2; 
}

//arrow function with statement body
const doubleStatementBody = (number) =>{
    return number * 2;
}

//arrow function with expression body
const doubleExpressionBody = (number) => number * 2;

//arrow function with expression body with single parameter
const doubleSingleParameterExpressionBody = number => number * 2;

//IIFE - Immediately invoked function expression
(function(){
    console.log('IIFE');
})();

//IIAFE - Immediately invoked arrow function expression
(() => console.log('IIAFE'))();