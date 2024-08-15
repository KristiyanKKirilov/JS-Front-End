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

//Joining array into a  (non mutating)
let namesAsString = namess.join(', ');
console.log(namesAsString);

//slice - taking sub array and assigning to new array (non-mutating)
let slicedArray = namess.slice(1, 3);
console.log(slicedArray);

//takes all elements from the given index to the end
let endNames = namess.slice(1);
console.log(endNames);

//making a copy of array
let copyNames = namess.slice();
console.log(copyNames);

//diferent refferrence 
console.log(copyNames === namess);

//reversing array without mutation
let reversingNames = namess.slice().reverse();
console.log(reversingNames);

let arr = ['BMW', 'Mercedes', 'Audi', 'Toyota'];

//check if element exists
const hasBmw = arr.includes('BMW');
console.log(hasBmw)

//check if element exists after given index
const hasAudi = arr.includes('Audi', 3);
console.log(hasAudi);

//return index of element
const indexOfBMW = arr.indexOf('BMW');
console.log(indexOfBMW);

//indexof - returns the first met element with the given name
//lastIndexOf - return the last met element with the given name
arr.push('BMW');
const lastIndexOfBMW = arr.lastIndexOf('BMW');
console.log(lastIndexOfBMW);
//indexOf with second parameter, the start index of searching
const foundBMW = arr.indexOf('BMW', 1);
console.log(foundBMW);

//NON-Existing element returns -1 (indexOf)
const nonexist = arr.indexOf('g');
console.log(nonexist);

//foreach - execute code for every element (non-mutating) iterative

function printElement(element){
    console.log(element);
}

arr.forEach(printElement);

//second option anonymous function
arr.forEach(function(element){
    console.log(element);
})

//third option arrow function 
arr.forEach(element => {
    console.log(element);
})

//Map - creating new array with the values based on the original values - non mutating
let lowerCaseCars = arr.map(car =>{
    return car.toLowerCase();
})

console.log(lowerCaseCars);

//Find a car that start with the letter L
//returns the first met element in the array
arr.push('Lancia');
let carWithL = arr.find(car => {
    return car.startsWith('L');
})

console.log(carWithL);

//All iterative methods require function
//Filter - find all elements based on condition - non-mutating
let carsWithB = arr.filter(car =>{
    return car.startsWith('B');
})

console.log(carsWithB);

//fill - fills an array with given value from start to end index
const newArr = [1,2,3,4];
console.log(newArr.fill(3, 1, newArr.length));

//can be filled without start and end index but it fill the whole array
console.log(newArr.fill(2));
//can be filled from start index till the end only with start index given
console.log(newArr.fill(0, 2));

