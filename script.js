// Regra de négocio

//Carne - 400 gr por pessoa + de 6 horas - 650
//Cerveja - 1200ml por Pessoa + de 6 horas 2000ml
// Refrigerante/agua - 1000ml por pessoa + 6 horas 1500 ml

//criança valem por 0,5

let inputAdultos = document.getElementById("Adultos");
let inputCriancas = document.getElementById("Criancas");
let inputDuracao = document.getElementById("Duracao");


let resultado = document.getElementById("resultado");


function calcular(){
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;



    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);

    resultado.innerHTML = `<p>${qdtTotalCarne}g de Carne </p>`;
    resultado.innerHTML += `<p>${qdtTotalCerveja}ml de Cerveja </p>`;
    resultado.innerHTML += `<p>${qdtTotalBebidas}ml de Bebidas </p>`;

    
}

function carnePP(duracao){
    if(duracao>=6){
        return 650;
    } else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao>=6){
        return 2000;
    } else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao>=6){
        return 1500;
    } else{
        return 1000;
    }
}