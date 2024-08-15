let names = ['Gosho', 'Soso', 'Roso'];
let empty =[];
let mixed = ['Gosho', true, 20];

const namess = ['Gosho', 'Pesho', 'Sezko'];
const [firstName, ...restNames] = namess;
console.log(firstName);
console.log(restNames);

function solve(numbers){
    let output ='';
    for (const number of numbers) {
        output += `${number} `;
    }

    console.log(output);
}

solve([1,2,3,4,5]);

namess.push('New name', 'Another new name', 'Anothe');
console.log(namess);

namess.pop();
console.log(namess);

//removing first element
namess.shift();
console.log(namess);
//shift -> can return the element and assign it to variable
let newName = namess.shift();
console.log(namess);
console.log(newName);

namess.unshift('firstElement');
console.log(namess);
let newLength = namess.unshift('more');
console.log(namess);
console.log(newLength);

//removing 1 element at first position 
namess.splice(1, 1);
console.log(namess);

//Added element to 3 position and moved the current 3th element to 4th position
namess.splice(3, 0, 'Added the last name');
console.log(namess);

//removing two elements and assigning them to new array
let removedNames = namess.splice(0, 2);
console.log(namess);
console.log(removedNames);

//reversing array but the new const is not new element, its refering to the same address in the heap
namess.reverse();
console.log(namess);