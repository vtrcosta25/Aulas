console.clear();
const prompt = require("prompt-sync")();

// Exercicio 4
// Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.

const opcao1 = "bife com batata frita";
const opcao2 = "Omelete";
const opcao3 = "Filé de Frango";
let escolhax = "Nenhuma";

console.log(
  `As opções do buffet são: \n 1- ${opcao1} \n 2- ${opcao2} \n 3- ${opcao3} \n`
);

let escolhanum = parseInt(prompt("Qual opção você prefere?"));

if (escolhanum == 1) {
  escolhaop = `${opcao1}`;
} else if (escolhanum == 2) {
  escolhaop = `${opcao2}`;
} else if (escolhanum == 3) {
  escolhaop = `${opcao3}`;
}

console.log(`\nVocê escolheu: ${escolhaop}`);
