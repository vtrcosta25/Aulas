



// recebendo idade atual da pessoa em DIAS
let idadeEmDias = +prompt("Digite a sua idade em dias: ");

// exibindo idade digitada
console.log(idadeEmDias);

// calculo para converter idade em dias para anos
// função Math.trunc() para truncar o número e retirar casas decimais
let diasEmAnos = Math.trunc(idadeEmDias / 365);

// exibindo tipo da variável
console.log(typeof(diasEmAnos));

console.log("Idade em anos: " + diasEmAnos);

// calculando resto dos dias que sobraram do cálculo de idade em dias para anos
let restoDias1 = idadeEmDias % 365;
console.log(restoDias1);

// calculo para converter resto dos dias que sobraram para meses
// função Math.trunc() para truncar o número e retirar casas decimais
let diasEmMeses = Math.trunc(restoDias1 / 30);
console.log("Idade em meses: " + diasEmMeses);

// calculando resto dos dias que sobraram do cálculo de idade em dias para meses
let restoDias2 = restoDias1 % 30;

console.log(restoDias2);