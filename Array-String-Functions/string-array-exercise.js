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

//2 -second option
function printN2(input, number){
    console.log(input.filter((_, i) => i % number == 0));

}

printN2(['5', '20', '31',  '4', '20'],2);

//3
function sortAscending(names){
    names.sort((a,b) => a.localeCompare(b))
              .map((name, index) => {
                const pos = index + 1;
                console.log(`${pos}.${name}`);
              });
    
    
}

sortAscending(["John", "Bob K", "Christina", "Ema", "John", "Bob A", "Christina", "Ema"]);

//4
function mixedSort(numbers){
    numbers.sort((a,b) => a - b);
    const mid = numbers.length / 2;
    const leftSide = numbers.slice(0, mid);
    const rightSide = numbers.slice(mid);
    const reversedRightSide = rightSide.slice().reverse();

    const result = [];
    for (let i = 0; i < mid; i++) {
        if(leftSide[i]){
            result.push(leftSide[i]);
        }
        if(reversedRightSide[i]){
            result.push(reversedRightSide[i])
        }        
    }
    return result;
}
mixedSort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

//4 - second option
function mixedSort2(numbers){
    let copy = numbers.slice().sort((a,b) => a -b);
    
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if(i % 2 == 0){
            result.push(copy.shift());            
        }
        else{
            result.push(copy.pop());            
        }
        
    }

    return result;
}

mixedSort2([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
//5
function replaceWord(words, text){
    const arrWords = words.split(', ');
    let result = text;
    arrWords.forEach((word) => {
        const searchValue = '*'.repeat(word.length);
        result = result.replace(searchValue, word);
    });

    console.log(result);
}

replaceWord('great, learning', 'softuni is ***** place for ******** new programming languages');

//6

function hashTagLetters(template){
    const pattern = /#[A-Za-z]+/gm;
    const matches = template.matchAll(pattern);

    for (const match of matches) {
        console.log(match[0].substring(1)); 
    }
}

hashTagLetters('Nowadays everyone uses # to tag a #special word in #socialMedia');

//7
function matchWord(word, text){   
    const match = text.split(' ').find(x => x.toLowerCase() === word.toLowerCase());
    if(match){
        console.log(word);
    }
    else{
        console.log(`${word} not found!`);
    }
}

matchWord('javascript','JavaScript is the best programming language');

//8
function splitCamelCase(text){
    const result = text.split(/(?=[A-Z])/);
    console.log(result.join(', '));
}

splitCamelCase('SplitMeIfYouCanHaHaYouCantOrYouCan');