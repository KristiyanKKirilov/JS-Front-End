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