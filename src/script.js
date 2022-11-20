//CALCULADORA SIMPLES
import { result } from "./components/Result/index.js";
import { clearValue } from "./components/Clear/index.js";

const clear = document.querySelector('.clear');
const calcular = document.querySelector('.calc');
const operador = document.querySelector('.operator');

calcular.addEventListener('click', (e) => {
    e.preventDefault();
    result();
    valueIncorreto();
});

clear.addEventListener('click', (e) => {
    e.preventDefault();
    clearValue();
});


function valueIncorreto() {
    if(!operador.value) alert('Escolha um Operador!');
};