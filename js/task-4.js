let credits = 23580;
let pricePerDroid = 3000;

let qantity = prompt('Какое количество дроидов Вы хотите купить?');

let message;
let totalPrice;
let lackOfCredits;

if (qantity === null) {
    message = 'Отменено пользователем!';
} else if (Number.isNaN(Number(qantity))) {
    message = 'Вы ввели неверные данные!';
} else {
    totalPrice = Number(qantity) * pricePerDroid;
    credits = credits - totalPrice;
    lackOfCredits = credits * (-1);

    credits < 0 ? message = `Недостаточно средств на счету! Вам не хватает ${lackOfCredits}` : message = `Вы купили ${qantity} дроидов, на счету осталось ${credits} кредитов.`
}

console.log(message);