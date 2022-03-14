// exercicio 3

console.clear();
const prompt = require("prompt-sync")();

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

////////////////////////////////////////////////////////

//Exercicio 4

// Converter total de anos em dias para idade padrão
let idadeEmDias = +prompt("Digite a sua idade em dias: ");
console.log(idadeEmDias);

//converter total de dias para anos
let diasEmAnos = Math.trunc(idadeEmDias / 365);
console.log(diasEmAnos);

//
console.log("Idade em anos: " + diasEmAnos);


let restoDias = idadeEmDias % 365;
console.log(restoDias);


// Converter dias total em meses
let diasEmMeses = Math.trunc(restoDias / 30);
console.log("Idade em meses: " + diasEmMeses);

//mostra o restante dos dias que sobrou
let sobraDias = restoDias % 30;

console.log(sobraDias);
