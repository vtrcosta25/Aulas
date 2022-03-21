console.clear();
const prompt = require("prompt-sync")();

let jog_vitoria = 0;
let IA_vitoria = 0;
let empate = 0;
let resp = 1;

let nome = prompt("Qual o seu nome: ");
console.log(`Olá ${nome}, seja bem vindo ao jogo JokenPô`); // Interação com usuário
console.log();

// comando para funcionar as rodadas.
do {
  do {
    num_rodadas = +prompt("Digite a quantidade de rodadas que deseja jogar: ");
    console.log(num_rodadas);
    console.log();

    if (num_rodadas <= 0)
      console.log("Quantidade inválida. Digite um valor maior que 0");
  } while (num_rodadas <= 0);

  // looping para escolha do jogador.
  for (let rodada = 0; rodada < num_rodadas; rodada++) {
    let escolha_jogador = null;
    console.log(`Rodada número ${rodada + 1}`);
    do {
      escolha_jogador = +prompt("Digite 0 (Pedra), 1 (Papel) ou 2(Tesoura): ");
      console.log();

      if (escolha_jogador < 0 || escolha_jogador > 2) {
        console.log("Opção Inválida. Digite um valor entre 0 e 2");
        console.log();
      }
    } while (escolha_jogador < 0 || escolha_jogador > 2);

    let escolha_IA = Math.floor(Math.random() * 3); // Code para gerar jogada da IA.

    console.log(`Opção do Jogador ${escolha_jogador}`);
    console.log(`Opção da IA ${escolha_IA}`);
    console.log();
    

    // estrutura das condições.
    if (escolha_IA == escolha_jogador) {
      console.log("Empate\n");
      empate++;
    }

    switch (escolha_jogador) {
      case 0:
        if (escolha_IA == 1) {
          console.log("Computador Ganhou\n");
          IA_vitoria++;
        } else if (escolha_IA == 2) {
          console.log("Jogador Ganhou\n");
          jog_vitoria++;
        }
        break;

      case 1:
        if (escolha_IA == 0) {
          console.log("Jogador Ganhou\n");
          jog_vitoria++;
        } else if (escolha_IA == 2) {
          console.log("Computador Ganhou\n");
          IA_vitoria++;
        }

        break;

      case 2:
        if (escolha_IA == 1) {
          console.log("Jogador Ganhou\n");
          jog_vitoria++;
        } else if (escolha_IA == 0) {
          console.log("Computador Ganhou\n");
          IA_vitoria++;
        }
        break;

      default:
        break;
    }
  }
  console.log("___________________________________________________________");
  console.log(`Total de vitórias do Jogador: ${jog_vitoria}`);
  console.log();
  console.log(`Total de vitórias da IA: ${IA_vitoria}`);
  console.log();
  console.log(`Ocorreu ${empate} Empates no jogo`);
  console.log();

  if (jog_vitoria == IA_vitoria) {
    console.log("Ocorreu empate");
  } else if (jog_vitoria > IA_vitoria) {
    console.log("Jogador foi o grande Vencedor");
  } else {
    console.log("IA foi a grande Vencedora");
  }
  console.log();
  resp = +prompt("Digite 1 para continuar ou qualquer tecla para sair ");
} while (resp == 1);
