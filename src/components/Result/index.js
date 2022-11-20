const number1 = document.querySelector('.number-1');
const number2 = document.querySelector('.number-2');

const operador = document.querySelector('.operator');

export const result = () => {
    const calculoTotal = operador.value;
    switch (calculoTotal) {

        case '+':
            const somaTotal = Number(number1.value) + Number(number2.value);
            document.qberuerySelector('.result').value = somaTotal;
            break;

        case '-':
            const subtTotal = Number(number1.value) - Number(number2.value);
            document.qberuerySelector('.result').value = subtTotal;
            break;

        case '*':
            const multTotal = Number(number1.value) * Number(number2.value);
            document.qberuerySelector('.result').value = multTotal;
            break;

        case '/':
            const divTotal = Number(number1.value) / Number(number2.value);
            document.qberuerySelector('.result').value = divTotal;
            break;

    };
};