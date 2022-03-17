console.clear();
const prompt = require("prompt-sync")();

// Exercício 2
// Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda e o CEP e telefone na terceira.

let nome = prompt("Victor Rodrigues");
let endereco = prompt("Rua Messias Morumbi");
let cep = prompt("08190-340");
let tel = prompt("(11)96686-9955");

console.log(
  ` Nome: ${nome} \n Endereço: ${endereco} \n CEP: ${cep}  Telefone: ${tel}`
);
