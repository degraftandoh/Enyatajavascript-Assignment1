let price = 10;
let quantity = 2;

console.log(`Initial Price: $${price}, Quantity: ${quantity}`);

price -= price * 0.2;

quantity++;

let totalPrice = price * quantity;

console.log(`Updated Price: $${price}, Quantity: ${quantity}, Total Price: $${totalPrice}`);