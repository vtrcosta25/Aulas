//EXERCICIO 1 FIXAÇÃO

console.clear();
const prompt = require('prompt-sync')();

/*
let num1 = prompt('Insira um valor: ');
let num2 = prompt('Insira outro valor: ');

if (num1 > num2){
    console.log('O número 1 é maior');

} else if (num1 < num2){
    console.log('O número 2 é maior');

} else {
    console.log('Os dois números são iguais.');
}
*/
///-----------------------------------

// EXERCICIO 2 FIXAÇÃO


let nota1 = +prompt('Insira um valor: ');
let nota2 = +prompt('Insira um valor: ');
let nota3 = +prompt('Insira um valor: ');
let nota4 = +prompt('Insira um valor: ');

let media = ((nota1 + nota2 + nota3 + nota4) / 4);

if(media)


if (media >= 7){
    console.log('Aprovado');

} else if (media >= 5 && media < 7){
    console.log('Recuperação');

} else {
    console.log('Reprovado');
}
console.log(media);