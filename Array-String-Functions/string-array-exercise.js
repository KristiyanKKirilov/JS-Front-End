//1
function rotation(numbers, rotateNum){
    const cuttOffIndex = rotateNum % numbers.length;
    const leftSide = numbers.slice(0, cuttOffIndex);
    const rightSide = numbers.slice(cuttOffIndex);
    const resultArr = rightSide.concat(leftSide);
    console.log(resultArr.join(' '));
}

rotation([51, 47, 32, 61, 21], 2);

//2
function printN(input, number){
    const result = [];
    for (let i = 0; i < input.length; i+= number) {
        console.log(input[i]);        
    }

    return result;
}

printN(['5', '20', '31',  '4', '20'],2);

//3
function sortAscending(names){
    names.sort();
    for (let i = 1; i <= names.length; i++) {
        console.log(`${i}.${names[i - 1]}`);
        
    }
    
}

sortAscending(["John", "Bob K", "Christina", "Ema", "John", "Bob A", "Christina", "Ema"]);