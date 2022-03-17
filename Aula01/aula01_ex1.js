console.clear();
const prompt = require("prompt-sync")();

// Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir calcule e informe a média ponderada do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6. Ex: nota a * 4 e nota b * 6.

let notaA = prompt("Qual valor da primeira nota: ");
let notaB = prompt("Qual valor da segunda nota: ");

let media = notaA * 0.4 + (notaB * 0.6) / 2;

console.log(media);
