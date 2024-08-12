// // function age(number){
// //     let status;
// //     if(number >= 0 && number <= 2){
// //         status = 'baby';
// //     }
// //     else if(number >= 3 && number <= 13){
// //         status = 'child';
// //     }
// //     else if(number >= 14 && number <= 19){
// //         status = 'teenager';
// //     }
// //     else if(number >= 20 && number <= 65){
// //         status = 'adult';
// //     }
// //     else if(number > 65){
// //         status = 'elder';
// //     }
// //     else{
// //         status = 'out of bounds';
// //     }

// //     console.log(status);
// // }

// // age(15);

// function getPrice(count, group, weekday){
//    const isFriday = weekday === 'Friday';
//    const isSaturday = weekday === 'Saturday';
//    const isSunday = weekday === 'Sunday';

//    const isStudentGroup = group === 'Students';
//    const isBusinessGroup = group === 'Business';
//    const isRegularGroup = group === 'Regular';

//    let priceForOne = 0;

//    if(isFriday){
//     if(isStudentGroup){
//         priceForOne += 8.45;
//     }
//     else if(isBusinessGroup){
//         priceForOne += 10.90;
//     }
//     else if(isRegularGroup){
//         priceForOne += 15;
//     }
//    }
//    else if(isSaturday){
//     if(isStudentGroup){
//         priceForOne += 9.80;
//     }
//     else if(isBusinessGroup){
//         priceForOne += 15.60;
//     }
//     else if(isRegularGroup){
//         priceForOne += 20;
//     }
//    }
//    else if(isSunday){
//         if(isStudentGroup){
//             priceForOne += 10.46; 
//         }
//         else if(isBusinessGroup){
//             priceForOne += 16;
//         }
//         else if(isRegularGroup){
//             priceForOne += 22.50;
//         }
//    }

//    let totalPrice = priceForOne * count;
//    let totalPriceWithDiscount = totalPrice;

//    if(isStudentGroup && count >= 30){
//     totalPriceWithDiscount *= 0.85;
//    }
//    else if(isBusinessGroup && count >= 100){
//     count -= 10;   
//     totalPriceWithDiscount = priceForOne * count;
//    }
//    else if(isRegularGroup && count >= 10 && count <= 20){
//     totalPriceWithDiscount *= 0.95;
//    }

//    console.log(`Total price: ${totalPriceWithDiscount.toFixed(2)}`);
// }

// getPrice(30, 'Students', 'Sunday');