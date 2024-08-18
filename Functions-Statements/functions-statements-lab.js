//1
function grade(grade){
    let status;
    if(grade < 3){
        status = 'Fail';
    }
    else if(grade < 3.50){
        status = 'Poor';
    }
    else if(grade < 4.50){
        status = 'Good';
    }
    else if(grade < 5.50){
        status = 'Very good'
    }
    else{
        status = 'Excellent';
    }

    if(status !== 'Fail'){
        console.log(`${status} (${grade.toFixed(2)})`);
    }
    else{
        console.log(`${status} (${grade.toFixed(0)})`);
    }
}

grade(2.30);

//2
function power(num, power){
    console.log(Math.pow(num, power));
}

power(2,8);

//3
function repeat(str, count){
    console.log(str.repeat(count));
}

repeat('top', 2);

//4
function calcPrice(product, count){
    let price;
    switch(product){
        case 'water': 
        price = 1;
        break;
        case 'coffee':
        price = 1.5;
        break;
        case 'coke':
            price = 1.4;
        break;
        case 'snacks':
            price = 2;
            break;

    }

    console.log((price * count).toFixed(2));
}

calcPrice('water', 5);