console.clear();
const prompt = require("prompt-sync")();

////////////////////////////////////////

//VARIÁVEIS

let nome = prompt("Digite seu nome jogador: ");

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


//  STATUS PERSONAGEM

let status = {
    vida: 100,
    fome: 20,
    carisma : 0,
    furtividade: 0,
    gold: 100
}

//VARIAVEIS DE CONTROLE

let livros = Math.trunc(Math.random() * 10);
let dia = 1;
hour = 0,
min = 0

// HISTÓRIA

console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
tempo(13, 45)

console.log();

console.log(`Olá ${nome}, você acompanhará a jornada de Arthas, 
um guerreiro de linhagem nobre, nascido em Payon e foi traído pelo seu povo e expulso de sua terra por um crime que não cometeu.
Agora vaga pelos reinos de Midgard em busca de um novo lar.

Após sua expulsão, começa sua jornada em direção a Geffen no qual sempre falam ser a cidade dos exilados. 
Seguindo pela estrada principal, você  segue em direção ao Oeste do Reino de Midgard.
Durante sua caminhada, avista uma caravana de mercadores, o que faz:\n

1. Tentar uma carona e fazer novas amizades;
2. Seguir meu caminho e ignorá-los;
3. Tentar saquear o grupo sorrateiramente;`);

console.log();
console.log(status);
console.log();

let perg1 = +prompt(`Escolha uma opção: 1, 2 ou 3? `);

console.log();

if (perg1 == 1){
    console.log(`Por sorte são mercadores amigáveis e me convidam a se juntar a eles até a próxima cidade. Também consegui me alimentar a um baixo custo.`)
    status.fome += 2;
    status.carisma += 5;
    status.gold -= 10;

    console.log();

    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
    tempo(07, 15);
    console.log(status);

    console.log();

    console.log(`Chegar na cidade foi rápido graças aos mercadores.`);
    
} 
else if(perg1 == 2){
    console.log(`Acabo de perder uma oportunidade de conseguir uma carona e comida.`);
    status.fome -= 2;
    status.carisma -= 5;

    console.log();

    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
    tempo(08, 30);
    console.log(status);

    console.log();

    console.log(`Indo a pé pela estrada principal acaba demorando mais do que o esperado para
    chegar na cidade mais próxima.`);
}
else{
    console.log(`Realiza o furto mas sofre ataques antes de escapar ficando com ferimento mas conseguiu algo para comer e continuar sua viagem.`);
    status.vida -= 20;
    status.fome += 10;
    status.furtividade +=10;

    console.log();

    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
    tempo(08, 30);
    console.log(status);

    console.log();
}

console.log();

console.log(`Quando chego na cidade, a primeira coisa que procuro é um local para me hospedar.
Passar uma noite custa $15. Devo usar meu dinheiro para isso?`);

console.log()

while(true){
    let perg2 = prompt('Sim ou Não? ').toUpperCase();
    if(perg2 == 'SIM' || perg2 == 'S' || perg2 == 'NAO' || perg2 == 'N'){
        if (perg2 == 'SIM' || perg2 == 'S'){
            status.carisma += 3;
            status.fome += 2;
            status.gold -= 20;

            console.log();

            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
            tempo(09, 00);
            console.log(status);
            break;
        }
        else{
            console.log('Tem uma pequena casa abandonada no bosque atrás da cidade, da para passar a noite.');
            status.fome -= 5;

            console.log();

            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
            tempo(09, 00);
            console.log(status);
            break;
        }
    } 
    else{
        console.log('Você precisa escolher entre Sim ou Não');
    }
    
}

console.log();

console.log(`No dia seguinte, arrumo minhas coisas e retomo a estrada.
Logo a frente sou capturado por uma armadilha para animais. O que farei agora?

1. Gritar por ajuda;
2. Tentar cortar a corda com a faca escondida na bota;
3. Fingir de morto e esperar que o caçador apareça.`);

console.log();

let perg3 = +prompt("Qual opção devo escolher? ");

console.log();

if (perg3 == 1){
    if(perg1 == 1 && status.carisma > 5){
        console.log(`O Grupo de mercadores do dia anterior estava próximo do local e escutaram meu pedido de ajuda.`);
        status.carisma += 5;

        console.log();

        console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
        tempo(01, 10);
        console.log(status);

        console.log();
    }
    else{
        console.log(`A estrada que estou é mais utilizada por viajantes, e nem todos são generosos em ajudar 
        um estranho. Acabo ficando um tempo preso até conseguir ajuda.`);
        status.carisma += 1;
        status.fome -= 3;

        console.log();

        console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
        tempo(03, 30);
        console.log(status);

        console.log();
    }
}
else if(perg3 == 2){
    console.log(`Consigo me soltar bem rápido e logo retorno à caminhada.`)
    status.furtividade += 2;
    status.fome -= 1;

    console.log();

    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
    tempo(00, 50);
    console.log(status);

    console.log();
}
else if(perg3 == 3){
    console.log(`O caçador estava vagando pela região conferindo as armadilhas, me ajudou a descer e
    me informou para tomar cuidado na próxima vez pois a área é perigosa.`);
    status.fome -= 2;
    status.carisma += 2;

    console.log();

    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
    tempo(02, 30);
    console.log(status);

    console.log();
}

console.log(`Finalmente consegui voltar a estrada, logo mais a frente está o Lago do Abismo, uma extensão 
enorme de água que impede a passagem direta para cidade de Prontera.
Avisto um grupo de anões próximo de uma passagem suspeita e vou verificar. 
É uma passagem criada por eles e oferecem um transporte em troca de Gold.
Consigo passar pelo Lago de duas maneiras:

1. Pagar uma quantia de dinheiro aos anões para usar a passagem($20);
2. Dar a volta no Lago do Abismo;`);

console.log();

while (true) {
    let perg4 = +prompt(`Escolha uma opção: `);

    console.log();

    if (perg4 == 1 || perg4 == 2 ) {
        if (perg4 == 1) {
            status.gold -= 20;
            status.carisma += 10;
            console.log('Consigo adiantar meu caminho até a cidade de Geffen.');
            
            console.log();

            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗')
            tempo(03, 30);
            console.log(status);
            break;
        } else {
            status.fome -= 5
            console.log('Acabo economizando meu dinheiro mas perco o triplo do tempo para contornar a montanha');
            
            console.log();

            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
            tempo(09, 40);
            console.log(status);
            break;
        }
    } else {
        console.log(`Escolha opção entre:
        1. Pagar uma quantia de dinheiro aos anões para usar a passagem($20);
        2. Dar a volta no Lago do Abismo;`);
    }
}
console.log();

console.log(`Depois de conseguir atravessar o Lago do Abismo, entro em Prontera, a Grande Metrópole de Midgard.
Por ser um exilado, rapidamente sou parado pela Guilda The Bank, 
uma Guilda de Guardas Reais responsável pela segurança da cidade.
Sou Escoltado até a sede da Guilda para falar com o chefe Murdock. 
Por sua experiência, reconhece minha linhagem
e solicita ajuda com um pergaminho que irá reforçar a barreira que protege a cidade porém, está enfraquecida.
`);

console.log();

while(true){
    let perg5 = prompt(`Oferecer ajuda? Sim ou Não? `).toUpperCase();

    console.log();

    if (perg5 == 'SIM' || perg5 == 'S' || perg5 == 'NAO' || perg5 == 'N' ) {
        if (perg5 == 'SIM' || perg5 == 'S') {
            status.carisma += 10;
            console.log('Escolho ajudar, sempre é bom ser lembrado por meus feitos. Não se sabe se precisarei deles futuramente.');
            
            console.log();

            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
            tempo(00, 40);
            console.log(status);
            break;
        } 
        else {
            status.carisma -= 15
            console.log('Em seu desespero, Murdock não aceita Não como resposta, ele ameaça me executar caso não ajude.');
            status.vida -= 3

            console.log();

            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
            tempo(01, 00);
            console.log(status);
            break;
        }
    } 
    else {
        console.log(`Você precisa escolher entre Sim ou Não`);
    }
}

console.log();

console.log(`O chefe me leva até a biblioteca da cidade e me explica que preciso traduzir o pergaminho
para descobrir porque a barreira que protege a cidade está enfraquecida deixando a cidade vulnerável a ataques,
desde então eles procuram pela resposta que está em um pergaminho escrito em uma língua desconhecida.
Murdock informa que se eu conseguir, me recompensaria.`);

console.log();

for(let cont = 0; cont < livros; cont++){
    console.log('Ainda não encontrei as palavras certas para decifrar o pergaminho...');
    console.log('Vou continuar procurando.');
    console.log('...PESQUISANDO...');

    console.log();


console.log(`Foram necessários ${livros} livros até que conseguisse decifrar a mensagem do pergaminho.`);

console.log();

console.log(`A BARRAGEM QUE REFORÇA A CIDADE NECESSITA DAS 4 GEMAS ELEMENTAIS (TERRA, ÁGUA, FOGO E AR)
PARA SUA RESISTÊNCIA PERMANECER FUNCIONANDO PERFEITAMENTE. 
APENAS MAGOS DO MESMO ELEMENTO DA PEDRA SÃO COMPATÍVEIS PARA SUA REGENERAÇÃO.`);

console.log();

console.log(`Assim que a mensagem é decifrada, aviso imediatamente o chefe Murdock, que agradece pela ajuda e 
me oferece uma grande recompensa de $1000, além de estadia para o dia todo e comida a vontade`);

status.gold += 1000;
status.fome += 30;

console.log();

console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
tempo(24, 00);
console.log(status);

console.log();

console.log(`Durante minha permanência em Prontera, confirmo que a cidade dos exilados realmente é chamada de Geffen,
fica próxima a cidade deserta chamada Morroc, uma cidade vizinha. Ainda falta mais um pouco para chegar lá.
Saindo de Prontera, preciso primeiro atravessar a Floresta Abandonada e lá vivem os povos mais selvagens já conhecidos como os Orcs, Ogros, Goblins entre outros.`);

console.log();

console.log(`Durante o percurso, encontro um pequeno acampamento de Orcs, eles naturalmente 
são agressivos. O que devo fazer?

1. Usar das minhas habilidades de furtividade para passar despercebido.
2. Tentar passar normalmente sem mostrar más intenções mesmo sabendo dos riscos.
3. Dar a volta no acampamento para evitá-los.`);

console.log();

let perg6 = +prompt('Qual opção devo escolher? 1, 2 ou 3? ');

console.log();

if (perg6 == 1){
    if(perg6 == 1 && status.furtividade > 15){
        console.log(`Consegui passar por eles sem ser notado.`);
        status.furtividade += 10;
        status.fome -= 2;

        console.log();

        console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
        tempo(01, 00);
        console.log(status);

        console.log();
    } 
    else{
        console.log(`Parece que não tenho habilidades furtivas o suficiente para conseguir passar sem
        ser notado. Os Orcs acabam me encontrando e sou ferido durante minha fuga.`);
        status.furtividade -= 3;
        status.vida -= 5;
        status.fome -= 2;

        console.log();

        console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
        tempo(01, 50);
        console.log(status);

        console.log();
    }
}
else if(perg6 == 2){
    console.log(`Aparentemente os Orcs não ligaram muito pela minha presença, apenas ficaram atentos, escapei sem sofrer danos.`);
    status.carisma += 5;
    status.fome -= 2;

    console.log();

    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
    tempo(00, 50);
    console.log(status);

    console.log();
}
else if(perg3 == 3){
    console.log(`Não foi uma boa idéia contornar o acampamento, porque logo ao lado do acampamento de
    Orcs tinha outro acampamento de Goblins e acabo sendo ferido e roubado.`);
    status.gold -= 100;
    status.vida -= 10;
    status.fome -= 5;

    console.log();

    console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
    tempo(02, 30);
    console.log(status);

    console.log();
}

console.log(`Depois dessa surpresa, preciso descansar pro dia seguinte. 
Dobrar atenção também para evitar esses encontros no caminho.
Assim que consigo sair da Floresta Abandonada, decido parar e montar acampamento para descansar um pouco.
Agora preciso saber o que fazer:

// 1. Montar uma cabana (mas antes preciso achar algumas madeiras para erguer minha tenda);
// 2. Achar uma caverna para me abrigar da chuva;`);

console.log();

let perg7 = +prompt('Qual a melhor opção? ');

console.log();

if (perg7 == 1 || perg7 || 2){
    if(perg7 == 1){
        let madeira = Math.trunc(Math.random() * 20);
        console.log(`Encontrei ${madeira} pedaços de madeira para fazer a cabana`);
        console.log('Por sorte durante a minha busca por madeira, encontrei algumas frutas, vão ser bem aproveitadas.');
        status.fome += 5;
    }
    else{
        console.log('Achar a caverna foi bem fácil, só espero não ser um alvo para os animais selvagens.');
        console.log('Até consegui caçar alguns coelhos que supriram a fome.');
        status.fome += 3;
    }
}
console.log();

console.log(`Hora de descansar um pouco e se recuperar para a caminhada de amanhã.
Agora falta muito pouco para chegar ao meu destino, só falta atravessar Morroc e estarei 
logo em Geffen.`);

console.log();

console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
tempo(24, 00);
console.log(status);

console.log();

console.log('Assim que acordei já arrumei todas as coisas e retornei a jornada.');

console.log();

console.log(`Depois de algum tempo andando, chego em Morroc.
Tem alguns pescadores a margem do rio que podem me ajudar a atravessar para o outro lado do Lago.

// Solicitar ajuda aos pescadores?`);

while(true){
    let perg8 = prompt('Sim ou Não? ').toUpperCase();

    console.log();

    if(perg8 == 'SIM' || perg8 == 'S' || perg8 == 'NAO' || perg8 == 'N'){

        if (perg8 == 'SIM' || perg8 == 'S'){

            console.log(`O pescador pode me ajudar, mas por uma certa quantia de gold.($100)`)
            let perg = prompt('Deseja pagar? Sim ou Não?').toUpperCase()

            console.log();

            if(perg == 'SIM' || perg == 'S' ){
                console.log('É um investimento válido para a etapa da jornada em que estou.')
                status.fome -= 2;
                status.carisma += 3;
                status.gold -= 200;

                console.log();

                console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
                tempo(12, 00);
                console.log(status);
                break;
            }    
            else{
                console.log('O valor é muito alto para a atravessia, vou economizar e arriscar a travessia sozinho');
                status.fome -= 2;
                
                console.log();

                console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
                tempo(18, 00);
                console.log(status);
                break;
            }
        }
        else{
            console.log('Tenho certeza que vi um bote abandonado e levemente quebrado em um lado do Lago, pode me ser útil');
            status.fome -= 2;

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

console.log('Consegui atravessar o Lago, agora estou cada vez mais perto de chegar a cidade de Geffen.');
console.log(`Estou esperançoso com o lugar, afinal, é um lugar em que posso realmente
viver em paz e a população partilha do mesmo destino que o meu; exilado de suas terras.`);

console.log();

console.log(`Já posso avistar os portões da cidade, é bem grande, e mesmo de longe já posso
perceber a diversidade de raças e povos que habitam nela.
De repente, sou parado por algumas crianças na estrada,
As crianças me pedem ajuda para coletar algumas frutas de uma árvore alta...`);

console.log();

while(true){
    let perg9 = prompt('Melhor ajudar? Sim ou Não? ').toUpperCase();

    console.log();

    if(perg9 == 'SIM' || perg9 == 'S' || perg9 == 'NAO' || perg9 == 'N'){

        if (perg9 == 'SIM' || perg9 == 'S'){
            console.log(`Acreditei que a árvore era grande somente para as crianças, mas é realmente alta para mim também.
            Acho melhor construir uma escada para me ajudar.`);
            let madeira = 12;
            for(let i = 0; i < madeira; i++){
                console.log(`Achei uma vareta boa o suficiente... Vou continuar procurando`);

                console.log();

                console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
                tempo(00, 10);
                console.log(status);

                console.log();
            }
            console.log(`Consegui construir uma escada grande o suficiente para atingir as frutas
            As crianças ficam muito felizes e até compartilham algumas frutas comigo.`);
            status.fome += 4;
            status.furtividade +=5;
            status.carisma += 3;

            console.log();

            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
            tempo(02, 00);
            console.log(status);
            break;
        }   
        else{
            console.log(`As crianças realmente precisavam daquelas frutas, estavam com fome.
            Ajudo com algumas moedas e dou um pouco de comida a elas para que não morram de fome. 
            Espero que outras pessoas possam ajudá-las`);
            status.gold -= 100
            status.fome -= 2;

            console.log();

            console.log('‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗');
            tempo(00, 40);
            console.log(status);
            break;
        }
    } 
    else{
        console.log('Você precisa escolher entre Sim ou Não');
    }
    
}

console.log();

console.log(`Finalmente, depois dessa longa jornada desde que saí das terras de Payon,
encontrei um lugar para um recomeço. Chegando na cidade, informo aos guardas minha situação
e os mesmos me guiam até o Rei para me apresentar junto aos futuros moradores.
O palácio é majestoso e o Rei Sylas acolhe todos aqueles que se apresentam a ele.
Somos encaminhados até o responsável pela realocação dos recém chegados e temos a oportunidade
de escolher uma casa para si.
Agora com um novo lar, consigo dar início a um recomeço.`);

console.log();

console.log('FIM')
};