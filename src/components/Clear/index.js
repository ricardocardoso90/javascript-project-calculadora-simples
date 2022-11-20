
const result = document.querySelector('.result');
const number1 = document.querySelector('.number-1');
const number2 = document.querySelector('.number-2');
const operador = document.querySelector('.operator');

export const clearValue = () => {
    number1.value = '';
    number2.value = '';
    operador.value = '';
    result.value = '';
};