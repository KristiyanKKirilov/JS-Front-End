let car = {
    brand: 'BMW',
    model: 'X3',
    year: 2007
};

//convert object to JSON (serializing)
let carJSON = JSON.stringify(car);
console.log(carJSON);

//convert json to object (deserializing)
let carObject = JSON.parse(carJSON);
console.log(carObject.brand);
