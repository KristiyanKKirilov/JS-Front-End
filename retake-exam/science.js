function solve(input){
    const numberOfChemicals = Number(input.shift());
    let chemicals = {};

    for (let i = 0; i < numberOfChemicals; i++) {
       let [chemical, quantity] = input[i].split(' # ');
       chemicals[chemical] = {
           quantity: Number(quantity),
           formula: null
       };
    }

    for (let i = numberOfChemicals; i < input.length; i++) {
        const [command, ...rest] = input[i].split(' # ');
        
        if (command === 'End') break;

        switch (command) {
            case 'Mix':
                const [firstChemical, secondChemical, count] = rest;
                const numberCount = Number(count);
                if(chemicals.hasOwnProperty(firstChemical) 
                    && chemicals.hasOwnProperty(secondChemical)){
                    if(chemicals[firstChemical].quantity >= numberCount 
                        && chemicals[secondChemical].quantity >= numberCount){
                        chemicals[firstChemical].quantity -= numberCount;
                        chemicals[secondChemical].quantity -= numberCount;
                        console.log(`${firstChemical} and ${secondChemical} have been mixed. ${numberCount} units of each were used.`);
                    } else {
                        console.log(`Insufficient quantity of ${firstChemical}/${secondChemical} to mix.`);
                    }
                }
                break;
                
            case 'Replenish':
                const [singleChemical, amount] = rest;
                const replenishAmount = Number(amount);
                if(chemicals.hasOwnProperty(singleChemical)){
                    const oldQuantity = chemicals[singleChemical].quantity;
                    chemicals[singleChemical].quantity += replenishAmount;
                    if(chemicals[singleChemical].quantity > 500){
                        const addedAmount = 500 - oldQuantity;
                        chemicals[singleChemical].quantity = 500;
                        console.log(`${singleChemical} quantity increased by ${addedAmount} units, reaching maximum capacity of 500 units!`);
                    } else {
                        console.log(`${singleChemical} quantity increased by ${replenishAmount} units!`);
                    }
                } else {
                    console.log(`The Chemical ${singleChemical} is not available in the lab.`);
                }
                break;

            case 'Add Formula':
                const [chemicalName, formula] = rest;
                if(chemicals.hasOwnProperty(chemicalName)){
                    chemicals[chemicalName].formula = formula;
                    console.log(`${chemicalName} has been assigned the formula ${formula}.`);
                } else {
                    console.log(`The Chemical ${chemicalName} is not available in the lab.`);
                }
                break;
        }
    }

    for (const chemical in chemicals) {
        if (chemicals[chemical].formula) {
            console.log(`Chemical: ${chemical}, Quantity: ${chemicals[chemical].quantity}, Formula: ${chemicals[chemical].formula}`);
        } else {
            console.log(`Chemical: ${chemical}, Quantity: ${chemicals[chemical].quantity}`);
        }
    }
}

solve([ '3',
    'Sodium # 300',
    'Chlorine # 100',
    'Hydrogen # 200',
    'Mix # Sodium # Chlorine # 200',
    'Replenish # Sodium # 250',
    'Add Formula # Sulfuric Acid # H2SO4',
    'Add Formula # Sodium # Na',
    'Mix # Hydrogen # Chlorine # 50',
    'End']
);
