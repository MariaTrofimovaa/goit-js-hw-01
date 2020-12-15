let country;
let price;
let message = 'Отменено пользователем';
let isValid = true;

let userInput = prompt('Введите название страны');
if (userInput !== null) {
    switch (userInput.toLowerCase()) {
    case 'китай':
        country = 'Китай';
        price = 100;
        break;
    
    case 'чили':
        country = 'Чили';
        price = 250;
        break;
    
    case 'австралия':
        country = 'Австралию';
        price = 170;
        break;
    
    case 'индия':
        country = 'Индию';
        price = 80;
        break;
    
    case 'ямайка':
        country = 'Ямайку';
        price = 120;
        break;
    
        default:
        isValid = false;
        message = 'В вашей стране доставка не доступна';
    } 
} else {
    isValid = false;
} 

if (isValid) {
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

alert(message);

