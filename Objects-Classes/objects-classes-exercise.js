//1
console.log(['-1-']);

function setPersonalNumberAndPrintEmployee(employeeInfo){
    const employees = {};
    employeeInfo.map(employeeName => employees[employeeName] = employeeName.length);
    for (const name in employees) {
        console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
    }
}

setPersonalNumberAndPrintEmployee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);

//2
console.log('-2-');

function setTownValues(townsInfo){
    let town = {};
    const townColumn = "town";
    const latitudeColumn = "latitude";
    const longitudeColumn = "longitude";

    for (const townInfo of townsInfo) {
        let townNameLatLong = townInfo.split('|').map(ti => ti.trim());
        let [townName, townLat, townLong] = townNameLatLong;
        let townLatNumber = Number.parseFloat(townLat);
        let townLongNumber = Number.parseFloat(townLong);
        town = {
            [townColumn]: townName,
            [latitudeColumn]: townLatNumber.toFixed(2), 
            [longitudeColumn]: townLongNumber.toFixed(2)
        };
        console.log(town);
    }

    
}
setTownValues(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);

//3
console.log('-3-');

function productStorage(productsStock, productsOrder){
    let products = {};
    for (let i = 0; i < productsStock.length; i+= 2) {
        products[productsStock[i]] = Number.parseInt(productsStock[i + 1]);        
    }

    for (let i = 0; i < productsOrder.length; i+=2) {
        if(products[productsOrder[i]]){
            products[productsOrder[i]] += Number.parseInt(productsOrder[i + 1]);             
        }
        else{
            products[productsOrder[i]] = Number.parseInt(productsOrder[i + 1]);              
        }
    }

    for (const key in products) {
        console.log(`${key} -> ${products[key]}`);
    }
}

productStorage([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );
