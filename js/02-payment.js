// Посчитать общую сумму покупок в корзине

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// console.log(cart.length);
let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//     // console.log(cart[i]);
//     total += cart[i];
//     // total = total + cart[i];
// }
for (const value of cart) {
    total += value;
}

console.log('Total: ', total);