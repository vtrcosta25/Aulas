console.clear();
const prompt = require("prompt-sync")();

// Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias. Também considere todo ano com 365 dias e todo mês com 30 dias.

let anos = +prompt("Digite os anos: ");
let meses = +prompt("Digite os meses: ");
let dias = +prompt("Digite os dias: ");

console.log(anos, meses, dias);
console.log();

// Converter anos para dias
let anosParaDias = anos * 365;
console.log(anosParaDias);
console.log();

// Converter meses para dias
let mesesParaDias = meses * 30;
console.log(mesesParaDias);
console.log();

// Somatória dos anos, meses e dias.
let totalDias = anosParaDias + mesesParaDias + dias;
console.log(totalDias);
