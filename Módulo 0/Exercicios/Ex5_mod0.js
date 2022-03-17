console.clear();
const prompt = require("prompt-sync")();

// Exercicio 5
// E os 10% do garçom?

const opcao1 = "bife com batata frita";
const valor1 = 42.54;
console.log(`Refeição: ${opcao1}
Valor da refeição: R$ ${valor1}
Taxa de Serviço: R$ ${(valor1 * 0.1).toFixed(2)}
Valor Total da Conta: R$ ${(valor1 * 1.1).toFixed(2)}`);
