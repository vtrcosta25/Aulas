console.clear();
const prompt = require("prompt-sync")();

/*Faça um Programa que leia 20 números inteiros e armazene-os num array. 
Armazene os números pares no array PAR e os números IMPARES no array IMPAR. 
Imprima os três vetores.
*/

let lista = [];
let pares = [];
let impares = [];
let numero = 0;

while (lista.length < 20){
    numero = +prompt('Digite um número: ');
    // if (lista.includes(numero)) {
    //     console.log('Repetido!!');
    //     continue;
    // }

    lista.push(numero);

    if (numero % 2 == 0){
        pares.push(numero);
    } else {
        impares.push(numero);
    }
}

console.log(lista);
console.log('Pares: ');
console.log(pares);
console.log('Impares: ');
console.log(impares);

console.log();