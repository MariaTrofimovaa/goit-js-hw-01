let total = 0;

while (true) {
    let input = prompt('Введите число');

    if (input === null) {
        break;
    }

    input = Number(input);
    
    const noaANumber = Number.isNaN(input);

    if (noaANumber) {
        alert('Было введено не число, попробуйте еще раз')
        continue;
    }

    total += input;
}

console.log(`Общая сумма ${total}`);