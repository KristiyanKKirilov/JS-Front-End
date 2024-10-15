const challenge = () => {
    Promise.resolve().then(() => console.log(1));
    setTimeout(() => console.log(2), 10);

    Promise.resolve().then(() => {
        console.log(3);
        Promise.resolve().then(() => console.log(4));
    })

    console.log(5);
    return 6;
};

challenge();
