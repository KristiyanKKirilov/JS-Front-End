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
function executeOperation(operandOne, operandTwo, operation){
    const result = operation(operandOne, operandTwo);
    console.log(result);
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
executeOperation(4, 5, multiply);
