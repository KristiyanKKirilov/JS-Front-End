class Car{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    drive(){
        console.log('Driving the bmw...');
    }
}

const car = new Car('BMW', 'X3');
console.log(JSON.stringify(car));
console.log(car.brand);
console.log(car['model']);
car.drive();
