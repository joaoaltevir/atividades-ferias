//variaveis e importações:
const prompt = require("prompt-sync")();
const funcao = require("./atividades");
let opcao = 0;
const ATIVIDADES = [];

//1 parte: C (criar)

while (opcao != 5) {
  funcao.menu();
  opcao = +prompt("Digite aqui: ");
  if (opcao == 1) {
    funcao.adicionar(ATIVIDADES);
  } else if (opcao == 2) {
    funcao.listar(ATIVIDADES);
    funcao.alterar(ATIVIDADES);
  } else if (opcao == 3) {
    funcao.listar(ATIVIDADES);
  } else if (opcao == 4) {
    funcao.listar(ATIVIDADES);
    let escolhaApagar = +prompt("Informe o indice que deseja apagar: ");
    funcao.apagar(escolhaApagar, ATIVIDADES);
  } else {
    console.log("Opção não é válida!");
  }
}
