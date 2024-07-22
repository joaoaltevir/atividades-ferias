const prompt = require("prompt-sync")();

function menu(){
    console.log(`O que você deseja fazer?
    [1] Adicionar Atividade
    [2] Atualizar dia
    [3] Listar Atividades
    [4] Apagar alguma atividade ou dia
    [5] Sair`);
}
function adicionar(ATIVIDADES){
    let teste;
    let obj = {
        Atividade: [],
    }
    obj.Dia = prompt("Informe o dia que deseja adicionar: ");
    teste = teste_dia(obj.Dia,ATIVIDADES);
    if(teste == 100){
        obj.Atividade.push(prompt("O que tu fez nesse dia? "));
        ATIVIDADES.push(obj);
    }else{
        ATIVIDADES[teste].Atividade.push(prompt("O que mais tu fez nesse dia?"));
        ATIVIDADES.splice(teste+1,1);
    }
    return
}
function teste_dia(dia, atividades){
    for(let i = 0; i < atividades.length; i++){
        if(dia == atividades[i].Dia){
            return i
        }
    }
    return 100
}
function listar(atividades){
    for(let i = 0; i < atividades.length;i++){
        console.log("Dia: ",atividades[i].Dia);
        console.log("Atividades: ", atividades[i].Atividade);
    }
}



module.exports = {
    menu,
    adicionar,
    listar,

}