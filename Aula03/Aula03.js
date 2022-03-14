console.clear();
const prompt = require('prompt-sync')();

// Declaração de variável

// var (variável de escopo global, que pode ser acessada de qualquer local.)
// let (variável de escopo local, que só pode ser usada dentro do espaço onde foi criada.)
// const (constante, também de escopo local. Seu valor não pode ser alterado e ela não pode ser redeclarada.)

let aluno = 'Fernando';

let nome = aluno;
let soma = 10 + 10;

let numero1 = 165460;
let numero2 = 16546543;

let Soma = numero1 + numero2;

console.log(nome);
console.log(soma);

console.log();

///

let preco = 50;
let quantidade = 1.5;

let total = preco * quantidade;

console.log(total);

///

let cliente = prompt('Qual o seu nome:  ?');
let Preco = +prompt('Qual o valor por quilo? ');
let Quantidade = +prompt('Quantos quilos você está comprando: ?');

let Total = Preco * Quantidade;

// console.log(cliente, "o valor total é: ", total);

//outra maneira:

console.log(`${cliente}, o valor total é: ${total}' `);
console.log();

////////////////////////////

// console.log("Olá mundo!!");

// let aluno = 'Fernando';
// let nome = aluno;
// console.log(nome);

let cliente1 = prompt('Qual o seu nome? ');
let preco1 = +prompt('Qual o valor por quilo? ');
let quantidade1 = +prompt('Quantos quilos você está comprando? ');

let total1 = preco1 * quantidade1;

// console.log(cliente, "o valor total é:", total);

// // Outra maneira:
console.log(`${cliente1}, o valor total é: ${total1}`);

console.log();