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
