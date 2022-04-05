console.clear();
const prompt = require("prompt-sync")();

////////////////////////////////////////

//VARIÁVEIS

let nome = prompt("Digite seu nome: ");

//FUNÇÕES

function tempo (hora, minuto){
    hour = hour + hora
    min = min + minuto
    if (hour > 24){
        dia++
        hour -= 24
    }
    if (min >= 60){
        hour++
        min -= 60
    }
    console.log(`
    DIA ${dia}
    ${hour}:${min}`) 
}


// OBJETO STATUS

let status = {
    fome: 50,
    energia : 50,
    cash: 100,
    carisma: 10,
}

//VARIAVEIS DE CONTROLE

let livros = Math.trunc(Math.random() * 10);
let dia = 1;
hour = 0,
min = 0

// HISTÓRIA

console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
tempo(06, 15)

console.log();

console.log(`Olá ${nome}, você é um estudante e acabou de conseguir um estágio e precisa se adaptar a sua nova rotina deixando da melhor maneira possível para que não comprometa seus estudos nem sua carreira.
Você acorda e ve que possui tempo para tomar café com calma mas ainda está com sono oque voce faz: ?\n

1. Dorme mais um pouco;
2. Se organiza e toma café para não se atrasar e ficar com fome;
`);

console.log()

let perg1 = +prompt(`Qual opção eu escolho: 1 ou 2? `);

console.log()

if (perg1 == 1){
    console.log(`Acabou acordando em cima da hora e sai sem tomar café para não atrasar`)
    status.fome -= 10;
    status.energia -= 15;

    console.log();

    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
    tempo(00, 30);
    console.log(status);

    console.log();

    //console.log(`Chegar na cidade foi rápido graças ao cavalo que me emprestaram.`);
    
} 

else{
    console.log(`Consegue comer com calma evitando gastar com comida no meio do caminho.`);
    status.fome += 10;
    status.energia += 5;

    console.log();

    // console.log(`Indo a pé pela estrada principal acabo demorando mais do que o esperado para
    // chegar na cidade mais próxima.`);

    console.log();

    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
    tempo(00, 15);
    console.log(status);

    console.log();
}

console.log();

 console.log(`Para percorrer o caminho até a empresa você pode ir de ônibus gastando 5 reais de passagem em 60 minutos ou pedir um uber levando metade do tempo a um custo triplicado. Qual seria melhor opção: ?\n
 
 1. Utilizar o ônibus;
 2. Pedir um Uber;
 `);

 console.log()

 let perg2 = +prompt(`Qual opção eu escolho: 1 ou 2? `);

 console.log()
 
 if (perg2 == 1){
     console.log(`Economiza dinheiro mas aumenta sua fome`)
     status.fome -= 10;
     status.energia -= 5;
     status.cash -= 5;
 
     console.log();
 
     console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
     tempo(00, 30);
     console.log(status);
 
     console.log();
     
 } 
 
 else{
     console.log(`Chega mais rapido na empresa e consegue comer algo porém, gasta um pouco mais.`);
     status.fome += 10;
     status.energia += 5;
     status.cash -= 15;

     console.log();
 
     console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
     tempo(00, 15);
     console.log(status);
 
     console.log();
 }
 
 console.log();


 console.log(`Quando chega na empresa, um colega de trabalho avista você tomando café
 e pergunta se pode comprar um pra ele. Deseja comprar outro café ?`
 );

while(true){
    let perg3 = prompt('Sim ou Não? ').toUpperCase();
    if(perg3 == 'SIM' || perg3 == 'S' || perg3 == 'NAO' || perg3 == 'N'){
        if (perg3 == 'SIM' || perg3 == 'S'){
            status.carisma += 10;
            status.cash -= 15;
            status.energia += 15;

            console.log();

            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
            tempo(20, 00);
            console.log(status);
            break;
        }
        else{
            console.log('Informa que está sem dinheiro e não vai poder oferecer um café no momento.');
            status.carisma -= 5;
            status.energia += 15;

            console.log();

            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
            tempo(20, 00);
            console.log(status);
            break;
        }
    } 
    else{
        console.log('Você precisa escolher entre Sim ou Não');
    }
    
}

console.log();

console.log(`Durante seu horário comercial, seu gerente pede para revisar alguns documentos para aprovação
e você ainda não finalizou suas tarefas além de precisar acabar o projeto para aula de hoje. 
Qual seria sua decisão agora?

1. Solicitar por ajuda a algum colega;
2. Tentar realizar as tarefas o mais rápido possível sozinho;
3. Ignorar o pedido do gerente.`);

console.log();

let perg4 = +prompt("Qual opção devo escolher? ");

console.log();

if (perg4 == 1){
    if(perg4 == 1 && status.carisma > 5){
        console.log(`Você solicita um suporte para as tarefas e seu colega te da um apoio por ter pago o café mas cedo.`);
        status.carisma += 5;
        status.fome -= 2;
        status.energia -= 3;

        console.log();

        console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
        tempo(01, 10);
        console.log(status);

        console.log();
    }
    else{
        console.log(`Você solicita ajuda mas ninguém está livre e seu colega o recusa ajudar por não ter comprado o café mais cedo.`);
        status.carisma -= 1;
        status.fome -= 3;

        console.log();

        console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
        tempo(03, 30);
        console.log(status);

        console.log();
    }
}
else if(perg4 == 2){
    console.log(`Você faz as obrigações e o pedido do gerente mas acaba ficando sem tempo para comer e dar atenção ao projeto da faculdade.`)
    status.energia -= 2;
    status.fome -= 5;

    console.log();

    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
    tempo(00, 50);
    console.log(status);

    console.log();
}
else if(perg4 == 3){
    console.log(`Você apenas foca nas suas obrigações 
    e deixa de lado o que foi requisitado pelo gerente deixando o mesmo um pouco irritado por não ter o ajudado.`);
    status.fome -= 2;
    status.carisma -= 5;
    status.energia -= 1;

    console.log();

    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
    tempo(02, 30);
    console.log(status);

    console.log();
}