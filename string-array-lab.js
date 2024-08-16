//1
function solve(numbers){
    let result = numbers.shift() + numbers.pop();
    console.log(result);
}
const arr = [10,20,30];

const arr2 = [10,20,30];
solve(arr);

//2
function copyAndReverse(count, numbers){
    const reverseArr = numbers.slice(0, count).reverse();
    console.log(reverseArr.join(' '));
}

copyAndReverse(2, arr2);

//3
function evenOdd(numbers){
    const even = element => element % 2 == 0;
    const odd = element => element % 2 != 0;
    const evenSum = numbers.filter(even);
    const oddSum = numbers.filter(odd);
    const evenResult = evenSum.reduce((total, number) => total + number, 0);
    const oddResult = oddSum.reduce((total, number) => total + number, 0);
    const result = evenResult - oddResult;
    console.log(result);
}
const array3 = [1,2,3,4,5,6];
evenOdd(array3);

function secondEvenOdd(numbers){
    let totalEven = 0;
    let totalOdd = 0;
    for (let index = 0; index < numbers.length; index++) {
        if(numbers[index] % 2== 0){
            totalEven+= numbers[index];
        }
        else{
            totalOdd += numbers[index];
        }
    }

    console.log(totalEven - totalOdd);
}

//4
function subString(word, firstIndex, secondIndex){
    const result = word.substring(firstIndex, firstIndex + secondIndex);
    console.log(result);
}

subString('SkipWord', 4, 7);

//5 
function censore(text, word){
    const symbol = '*';
    const result = text.replaceAll(word, symbol.repeat(word.length));
    console.log(result);
}

censore('A small sentence with some words', 'small');