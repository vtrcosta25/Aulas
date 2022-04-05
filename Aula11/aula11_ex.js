console.clear();
const prompt = require('prompt-sync')();

function calculo(num1, num2) {
    let soma = num1 + num2 

    console.log( `A soma é: ${soma}`);
    console.log( `A subtração é: ${num1 - num2}`);
    console.log( `A multiplicação é: ${num1 * num2}`);
    console.log( `A divisão é: ${num1 / num2}`);
    
    
}

let valor1 = +prompt ("Digite um valor: ");
let valor2 = +prompt ("Digite um valor: ");
calculo(valor1, valor2);
