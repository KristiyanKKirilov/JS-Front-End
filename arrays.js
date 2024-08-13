let names = ['Gosho', 'Soso', 'Roso'];
let empty =[];
let mixed = ['Gosho', true, 20];

const namess = ['Gosho', 'Pesho', 'Sezko'];
const [firstName, ...restNames] = namess;
console.log(firstName);
console.log(restNames);