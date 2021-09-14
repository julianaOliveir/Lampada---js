"use strict"
const lampada = document.getElementById("lampada")
let idInterval

function lampaInteira() {
    return lampada.src.includes("ligada")
}

function desligarLampada() {
    if (lampaInteira()) {
        lampada.src = "img/desligada.jpg"
    }
}

function ligarLampada() {
    if (lampaInteira()) {
        lampada.src = "img/ligada.jpg"
    }
}

function quebrarLampada() {
    lampada.src = "img/quebrada.jpg"
}

function lampadaDesligada() {
    return lampada.src.includes("desligada")
}

function trocarImagem() {
    if (lampadaDesligada()) {
        ligarLampada()
    } else {
        desligarLampada()
    }
}

function pararPiscar() {
    clearInterval(idInterval)
}

function piscarLampada() {

    const piscar = document.getElementById("piscar")
    if (piscar.textContent == "Piscar") {
        idInterval = setInterval(trocarImagem, 1000)
        piscar.textContent = "Parar"
    } else {
        pararPiscar()
        piscar.textContent = "Piscar"
    }
}


// eventos
document.getElementById("ligar").addEventListener("click", ligarLampada)
document.getElementById("desligar").addEventListener("click", desligarLampada)
document.getElementById("piscar").addEventListener("click", piscarLampada)

lampada.addEventListener("mouseover", ligarLampada)
lampada.addEventListener("mouseout", desligarLampada)
lampada.addEventListener("dblclick", quebrarLampada)
