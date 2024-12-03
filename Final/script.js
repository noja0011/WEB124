//Nora Jaafar 12/5/2024
function mathAddition(numero) {
    let answer = '';
    for (let i = 1; i <= 10; i++) {
        answer += `${numero} + ${i} = ${numero + i}\n`;
    }
    document.getElementById('addition').textContent = answer;
}

function mathSubtraction(numero) {
    let answer = '';
    let i = 1;
    while (i <= 10) {
        answer += `${numero} - ${i} = ${numero - i}\n`;
        i++;
    }
    document.getElementById('subtraction').textContent = answer;
}

function mathMultiplication(numero) {
    let answer = '';
    let i = 1;
    do {
        answer += `${numero} * ${i} = ${numero * i}\n`;
        i++;
    } while (i <= 10);
    document.getElementById('multiplication').textContent = answer;
}

function mathDivision(numero) {
    let answer = '';
    for (let i = 1; i <= 10; i++) {
        answer += `${numero} / ${i} = ${(numero / i).toFixed(2)}\n`;
    }
    document.getElementById('division').textContent = answer;
}

function calculate() {
    let numero = parseFloat(document.getElementById('numero').value);

        mathAddition(numero);
        mathSubtraction(numero);
        mathMultiplication(numero);
        mathDivision(numero);
}

document.getElementById('calculateButton').addEventListener('click', calculate);