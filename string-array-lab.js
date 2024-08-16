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