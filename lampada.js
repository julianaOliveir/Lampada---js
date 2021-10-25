"use strict"

const lampada = document.getElementById("lampada")
const piscar = document.getElementById("piscar")

let idIntervalo

function lampadaInteira(){
    return lampada.src.includes("ligada")
}

function desligarLampada(){
    if(lampadaInteira()){
        lampada.src = "img/desligada.jpg"
    }    
}

function ligarLampada() {
    if(lampadaInteira){
        lampada.src = "img/ligada.jpg"
    }
}

function quebrarLampada(){
    lampada.src = "img/quebrada.jpg"
}

function lampadaDesligada(){
    return lampada.src.includes("desligada")
}

function trocarImg(){
    if(lampadaDesligada()){
        ligarLampada()
    }else{
        desligarLampada()
    }
}

function pararPiscarLampada(){
    clearInterval(idIntervalo)
}

function piscarLampada(){
    if(piscar.textContent == "Piscar"){
        idIntervalo = setInterval(trocarImg, 1000)
        piscar.textContent = "Parar"
    }else{
        pararPiscarLampada()
        piscar.textContent = "Piscar"
    }
}


//eventos
document.getElementById('ligar').addEventListener("click", ligarLampada)
document.getElementById('desligar').addEventListener("click" , desligarLampada)
document.getElementById('piscar').addEventListener("click", piscarLampada)

document.getElementById('lampada').addEventListener("mouseover", ligarLampada) //mouseover - evento quando o mouse esta sob o elemento
document.getElementById('lampada').addEventListener("mouseout", desligarLampada) // mouseout - evento ao sair do elemento
document.getElementById('lampada').addEventListener("dblclick", quebrarLampada)


/*
IdInteval = setInterval(funcao,tempo(ms)) - funciona sem parar a cada segundo
setTimeout(funcao, tempo) - apenas uma unica vez
clearintrval(IdInterval) - parar o setInterval
*/ 

/*
Para poder usar o método clearInterval (), você deve usar uma variável ao criar o método de intervalo:

myVar = setInterval("javascript function", milliseconds);

Em seguida, você poderá interromper a execução chamando o método clearInterval ().
clearInterval(myVar);
*/

/*
A propriedade textContent define ou retorna o conteúdo de texto do nó especificado e todos os seus descendentes .
Se você definir a propriedade textContent, quaisquer nós filhos serão removidos e substituídos por um único nó Texto contendo a string especificada.
*/