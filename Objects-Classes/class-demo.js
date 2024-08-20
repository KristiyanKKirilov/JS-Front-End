class Car{
    repairKit = 2;
    //Private property
    #privateValue = 'Private';
    //static property
    static doors = 4;
    //static private property
    static #privateValue2 = 'Static private';

    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    drive(){
        console.log('Driving the bmw...');
    }

    //static method accesed by the class not object
    static hasRepairKit(car){
        console.log(this.#privateValue2);
        return car.repairKit > 0; 
    }

    //getter property
    get privateValue(){
        return this.#privateValue;
    }

    set privateValue(value){
        this.#privateValue = value; 
    }
}

class SuperCar extends Car{
    constructor(brand, model, year){
        super(brand, model);
        this.year = year;
    }
}
const car = new Car('BMW', 'X3');
console.log(JSON.stringify(car));
console.log(car.brand);
console.log(car['model']);
car.drive();
console.log(Car.hasRepairKit(car));
console.log(Car.doors);
console.log(car.privateValue);
car.privateValue = 'New secret';
console.log(car.privateValue);

