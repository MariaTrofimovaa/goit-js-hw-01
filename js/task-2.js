const total = 100; 
let ordered = +prompt('Введите количество единиц товара');

console.log(ordered);

let message = total >= ordered ? "Заказ оформлен, с вами свяжется менеджер" : "На складе недостаточно твоаров!";

console.log(message);

