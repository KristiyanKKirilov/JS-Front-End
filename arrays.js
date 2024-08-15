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