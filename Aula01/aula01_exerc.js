console.clear();
const prompt = require('prompt-sync')();

let notaA = prompt('Qual valor da primeira nota: ');
let notaB = prompt('Qual valor da segunda nota: ');

let media = ((notaA * 4) + (notaB * 6) / 2);

console.log(media);
