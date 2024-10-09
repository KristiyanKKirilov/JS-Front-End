const marriagePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() < 0.5){
          resolve('Just married!');
        } 
        else{
            reject('Not married!');
        } 
            
    }, 1000);
});

//Pending state
console.log(marriagePromise);

//Consume promise
marriagePromise
    .then((result) => {
        console.log(result); //fulfilled state
    })
    .catch((reason) => {
        console.log(reason); //failed state 
    })
    .finally(() => {
        console.log('The promise ended');
    });
    
    
