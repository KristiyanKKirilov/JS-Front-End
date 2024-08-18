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