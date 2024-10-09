const marriagePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Just married!');
    }, 1000);
});
