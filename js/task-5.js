let country = prompt('Введите название страны').toLowerCase();

switch (country) {
    case 'Китай'.toLowerCase():
        console.log('Доставка в Китай будет стоить 100 кредитов');
        break;
    
    case 'Чили'.toLowerCase():
        console.log('Доставка в Чили будет стоить 250 кредитов');
        break;
    
    case 'Австралия'.toLowerCase():
        console.log('Доставка в Австралию будет стоить 170 кредитов');
        break;
    
    case 'Индия'.toLowerCase():
        console.log('Доставка в Индию будет стоить 80 кредитов');
        break;
    
    case 'Ямайка'.toLowerCase():
        console.log('Доставка в Ямайку будет стоить 120 кредитов');
        break;
    
    default:
        alert('В вашей стране доставка не доступна');
}


