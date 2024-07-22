const prompt = require("prompt-sync")();

function menu() {
  console.log(`O que você deseja fazer?
    [1] Adicionar Atividade
    [2] Atualizar dia
    [3] Listar Atividades
    [4] Apagar dados
    [5] Sair`);
}
function adicionar(ATIVIDADES) {
  let teste;
  let obj = {
    Atividade: [],
  };
  obj.Dia = prompt("Informe o dia que deseja adicionar: ");
  teste = teste_dia(obj.Dia, ATIVIDADES);
  if (teste == 100) {
    obj.Atividade.push(prompt("O que tu fez nesse dia? "));
    ATIVIDADES.push(obj);
  } else {
    ATIVIDADES[teste].Atividade.push(prompt("O que mais tu fez nesse dia?"));
    ATIVIDADES.splice(teste + 1, 1);
  }
  return;
}
function teste_dia(dia, atividades) {
  for (let i = 0; i < atividades.length; i++) {
    if (dia == atividades[i].Dia) {
      return i;
    }
  }
  return 100;
}
function listar(atividades) {
  for (let i = 0; i < atividades.length; i++) {
    console.log("--------------------------------");
    console.log("Indice: ", i);
    console.log("Dia: ", atividades[i].Dia);
    console.log("Atividades: ", atividades[i].Atividade);
  }
}
const alterarDia = (atividades, i) => {
  atividades[i].Dia = prompt("Informe o dia correto: ");
  return;
};
const alterarAtividade = (atividades, i) => {
  tamanhoArray = atividades[i].Atividade.length;
  atividades[i].Atividade.splice(0, tamanhoArray);
  atividades[i].Atividade = prompt(
    "Informe o que você fez nesse dia corretamente: "
  );
};
const apagar = function (indice, atividades) {
  atividades.splice(indice, 1);
  console.log("Apago com sucesso!");
};
const alterar = (atividades) => {
  let resposta = +prompt("Informe o indice que deseja alterar: ");
  console.log(atividades[resposta].Dia);
  console.log(atividades[resposta].Atividade);
  console.log(`O que você deseja alterar?
    [1]Dia
    [2]Atividade`);
  let escolhaAlterar = prompt("Digite aqui: ");
  if (escolhaAlterar == 1) {
    alterarDia(atividades, resposta);
  } else if (escolhaAlterar == 2) {
    alterarAtividade(atividades, resposta);
  } else {
    console.log("Opção inválida: ");
  }
};

module.exports = {
  menu,
  adicionar,
  listar,
  apagar,
  alterar,
};
