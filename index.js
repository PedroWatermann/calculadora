const tela = document.getElementById("tela");
let btnIgual;
let btnLimpar;
document.getElementById("igual").addEventListener("click", () => {
    btnIgual = true
});

document.getElementById("limpar").addEventListener("click", () => {
    btnLimpar = true
});

function mostrarNaTela(char) {
    if (btnIgual || btnLimpar) {
        tela.value = "";
        tela.value += char;
        btnIgual = false;
    } else {
        tela.value += char;
    }
}

function limpaTela() {
    tela.value = 0;
}

function calcular() {
    try {
        tela.value = eval(tela.value);
    } catch (error) {
        tela.value = "Erro";
    }
}