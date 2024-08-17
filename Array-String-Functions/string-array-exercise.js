//1
function rotation(numbers, rotateNum){
    while(rotateNum){
        let num = numbers.shift();
        numbers.push(num);
        rotateNum--;
    }

    console.log(numbers.join(' '));
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