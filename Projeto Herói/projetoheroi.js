console.clear();
const prompt = require('prompt-sync')();


console.log(`Contra o tempo\nUm estágiario possui uma rotina puxada e precisa se organizar melhor para a rotina do dia.\n`);

let resposta1 = 'sim'
let resposta2 = 'nao'
let contador = 0;


while (true) {
    let pergunta1 = prompt("1)Ele costuma descansar bem para o dia seguinte ter energias? ");

    if(pergunta1 == resposta1){
        console.log("Ótimo, seu dia será mais produtivo.");
        contador++;
        break;
    } else if(pergunta1 == resposta2){
        console.log("Cansado para encarar a rotina, seu foco no trabalho pode não ser dos melhores.");
        break;
    } else{
        console.log();
        console.log("A resposta é inválida, responda sim ou nao.")
        continue;
    }
}

while (true) {
    console.log();
    let pergunta2 = prompt("2)Costuma sair com antecedencia para evitar imprevistos no trajeto? ");

    if(pergunta2 == resposta1){
        console.log("Muito bom, se planejou a rota para chegar a tempo independente dos imprevistos.");
        contador++;
        break;
    } else if(pergunta2 == resposta2){
        console.log("Talvez se atrase para o trabalho, podendo comprometer seu estágio.");
        break;
    } else{
        console.log();
        console.log("A resposta é inválida, responda sim ou nao.")
        continue;
    }
}

while (true) {
    console.log();
    let pergunta3 = prompt("3)Em seu local de trabalho costuma realizar as tarefas de forma pontual? ");

    if(pergunta3 == resposta1){
        console.log("Isso ai, além do aprendizado pode sobrar tempo para aprender coisas novas.");
        contador++;
        break;
    } else if(pergunta3 == resposta2){
        console.log("Talvez fique depois do horário e pode comprometer seu estágio.");
        break;
    } else{
        console.log();
        console.log("A resposta é inválida, responda sim ou nao.")
        continue;
    }
}

while (true) {
    console.log();
    let pergunta4 = prompt("4)Chegou cedo em casa e vai conseguir se alimentar antes de dormir? ");

    if(pergunta4 == resposta1){
        console.log(" Ótimo, boa alimentação é essencial para aguentar a rotina.");
        contador++;
        break;
    } else if(pergunta4 == resposta2){
        console.log("Viver só de lanches vaite deixar doente.");
        break;
    } else{
        console.log();
        console.log("A resposta é inválida, responda sim ou nao.")
        continue;
    }
}

while (true) {
    console.log();
    let pergunta5 = prompt("5)Conseguiu deitar cedo na cama para um boa noite de sono ? ");

    if(pergunta5 == resposta1){
        console.log(" Bom descanso, amanhã a rotina continua. ");
        contador++;
        break;
    } else if(pergunta5 == resposta2){
        console.log(" Seu corpo não vai aguentar muito tempo nessa rotina bagunçada. ");
        break;
    } else{
        console.log();
        console.log("A resposta é inválida, responda sim ou nao.")
        continue;
    }
}


    if(contador == 0){
        console.log();
        console.log("O Estágiario falhou em arrumar sua rotina.");

    }   else if(contador == 1 || contador == 2){
        console.log();
        console.log("O Estágiario está com a rotina bagunçada mas ainda consegue arrumar.");

    }   else if(contador == 3){
        console.log();
        console.log("Você estava indo bem mas ainda não conseguiu seu objetivo.");      
    } 
        else if(contador == 4){
        console.log();
        console.log("Você conseguiu seu objetivo mas ainda falta alguns detalhes para deixar 100%.");      
    } 
        else{
        console.log();
        console.log("Parabéns, você conseguiu melhorar todos  os aspectos deixando sua rotina diária melhor.")   
    }
