//1
console.log(['-1-']);

function setPersonalNumberAndPrintEmployee(employeeInfo) {
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

function setTownValues(townsInfo) {
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

function productStorage(productsStock, productsOrder) {
    let products = {};
    for (let i = 0; i < productsStock.length; i += 2) {
        products[productsStock[i]] = Number.parseInt(productsStock[i + 1]);
    }

    for (let i = 0; i < productsOrder.length; i += 2) {
        if (products[productsOrder[i]]) {
            products[productsOrder[i]] += Number.parseInt(productsOrder[i + 1]);
        }
        else {
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

//4
console.log('-4-');

function printMoviesInfo(moviesInfo) {
    const addMovieCommand = 'addMovie';
    const directedByCommand = 'directedBy';
    const onDateCommand = 'onDate';
    let movies = [];

    for (const currentMovieInfo of moviesInfo) {
        let movieInfo = currentMovieInfo.split(" ");
        if (movieInfo.includes(addMovieCommand)) {
            movieInfo.shift();
            let name = movieInfo.join(" ");
            movies.push({ name: name });
        }
        else if (movieInfo.includes(directedByCommand)) {
            const indexOfDirectedBy = movieInfo.indexOf(directedByCommand);
            const name = movieInfo.slice(0, indexOfDirectedBy).join(" ");
            const directorName = movieInfo.slice(indexOfDirectedBy + 1).join(" ");
            const director = 'director';
            for (let i = 0; i < movies.length; i++) {
                const movieKeys = Object.keys(movies[i])[0];
                let currentMovieName = movies[i][movieKeys];
                if(currentMovieName === name){
                    movies[i][director] =  directorName;
                }
            }            
        }
        else if(movieInfo.includes(onDateCommand)){
            const indexOfOnDate = movieInfo.indexOf(onDateCommand);
            const name = movieInfo.slice(0, indexOfOnDate).join(" ");
            const onDate = movieInfo.slice(indexOfOnDate + 1).toString();
            const date = 'date';

            for (let i = 0; i < movies.length; i++) {
                const movieKeys = Object.keys(movies[i])[0];
                let currentMovieName = movies[i][movieKeys];
                if(currentMovieName === name){
                    movies[i][date] =  onDate;
                }
            }       
        }
    }

    for (let i = 0; i < movies.length; i++) {
        if(Object.keys(movies[i]).length === 3){
            console.log(JSON.stringify(movies[i]));
        }            
    }
}

printMoviesInfo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);


//5
console.log('-5-');

function heroRegister(herosInfo){
    let heros = [];
    const hero = 'Hero';
    const level = 'level';
    const items = 'items';
    for (const currentHeroInfo of herosInfo) {
        const heroInfo = currentHeroInfo.split(' / ');
        const [heroName, heroLevel, heroItems] = heroInfo;
        heros.push({
                [hero]: heroName,
                [level]: Number(heroLevel),
                [items]: heroItems
            });
    }

    for (const currentHero of heros.sort((heroA, heroB) => heroA.level - heroB.level)) {
        for (const key in currentHero) {
            if(key === hero){
                console.log(`${key}: ${currentHero[key]}`)
            }
            else{
                console.log(`${key} => ${currentHero[key]}`)
            }
           
        }
    }
}

heroRegister([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

//5 - second solution
console.log('-5-2');
function heroRegister2(herosInfo){
    herosInfo
    .map((heroData) => {
        const [name, level, items] = heroData.split(' / ');
        return {
            name,
            level: Number(level),
            items
        };
    })
    .sort((a,b) => a.level - b.level)
    .forEach((hero) => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
    
}
heroRegister2([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

//6
console.log('-6-');

function wordsTracker(input){
    const wordsToSearch = input.shift().split(' ');
    let result = {};
    for (const word of wordsToSearch) {
        let times = input.filter(w => w == word).length;
        result[word] = times;
    }

    let entries = Object.entries(result);
    for (const [key, value] of entries.sort((a, b) => b[1] - a[1])) {
        console.log(`${key} - ${value}`);
    }
}

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    );

//7
console.log('-7-');

function printOddMetElements(input){
    let result = [];
    const allElements = input.split(' ').map(el => el.toLowerCase());
    let uniqueElements = allElements.filter((value, index, self) => {
        return self.indexOf(value) === index});

    for (const element of uniqueElements) {
        let times = allElements.filter(w => w == element).length;
        if(times % 2 !== 0){
            result.push(element);
        }
    }

    console.log(result.join(' '));
}

printOddMetElements('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

//7 - second solution
console.log('-7-2');

function printOddMetElements(input){
    const occurences = input.split(' ').reduce((acc, curr) => {
        const key = curr.toLowerCase();
        if(!acc.hasOwnProperty(key)){
            acc[key] = 0;
        }

        acc[key]++;

        return acc;
    }, {});

    console.log(
        Object.keys(occurences)
        .filter((key) => occurences[key] % 2 !== 0)
        .join(' ')
    );
}
    printOddMetElements('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

//10
console.log('-10-');

class Vechicle{
    constructor(type, model, parts, fuel){
        this.type = type;
        this.model = model;
        this.parts = {
            ...parts,
            quality: parts.engine * parts.power
        };
        this.fuel = fuel;
    }

    drive(fuelConsumption){
        this.fuel -= fuelConsumption;
        if(this.fuel < 0){
            this.fuel = 0;
        }        
    }

   
}

 let parts = {engine: 6, power: 100};
    let vehicle = new Vechicle('a', 'b', parts, 200);    
    vehicle.drive(100);
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);


