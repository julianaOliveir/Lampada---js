"use strict"

const lampada = document.getElementById("lampada")
// let  idLigar
// let idDesligar
let IdInterval

function lampadaInteira(){
    return lampada.src.includes("ligada")
}

function desligarLampada(){
    if(lampadaInteira()){
        lampada.src = "img/desligada.jpg"
    }    
}

function ligarLampada() {
    // if(lampadaInteira()){
    //     lampada.src = "img/ligada.jpg"
    // }    
    return lampada.src.includes("desligada")
}

function quebrarLampada(){
    lampada.src = "img/quebrada.jpg"
}

function trocarImagem(){
    if(desligarLampada()){
        ligarLampada()
    }else{
        desligarLampada()
    }
}

function paraPiscar(){
    clearInterval(IdInterval)
}

function piscarLampada(){
    const piscar = document.getElementById("piscar")
    if(piscar.textContent == "Piscar"){
        setInterval(trocarImagem, 1000)
        piscar.textContent = "Parar"
    }else{
        paraPiscar()
        piscar.textContent = "Piscar"
    }
}

// function piscarLampada(){
//     const buttonPiscar = document.getElementById('piscar')
//     if(buttonPiscar.textContent == 'piscar'){
//     setInterval(ligarLampada, 500)
//     setInterval(desligarLampada, 1000)
//     document.getElementById('piscar').textContent = "Parar"
//     }else{
//         buttonPiscar.textContent = 'piscar'
//     }    
// }

// function pararPiscar(){
//     clearInterval(idLigar)
//     clearInterval(idDesligar)
// }

//eventos
document.getElementById('ligar').addEventListener("click", ligarLampada)
document.getElementById('desligar').addEventListener("click" , desligarLampada)
document.getElementById('lampada').addEventListener("mouseover", ligarLampada) //mouseover - evento quando o mouse esta sob o elemento
document.getElementById('lampada').addEventListener("mouseout", desligarLampada) // mouseout - evento ao sair do elemento
lampada.addEventListener("dblclick", quebrarLampada)
document.getElementById('piscar').addEventListener("click", piscarLampada)

/*
IdInteval = setInterval(funcao,tempo(ms)) - funciona sem parar a cada segundo
setTimeout(funcao, tempo) - apenas uma unica vez
clearintrval(IdInterval) - parar o setInterval
*/ 