const tela = document.getElementById("tela");
let btnIgual;
let btnLimpar;

document.getElementById("igual").addEventListener("click", () => {
    btnIgual = true;
});
document.getElementById("limpar").addEventListener('click', () => {
        btnLimpar = true;
});
window.onload = () => {
    tela.value = 0;
    btnLimpar = true;
}

function mostrarNaTela(char) {
    if (btnIgual || btnLimpar) {
        tela.value = "";
        tela.value += char;
        btnIgual = false;
        btnLimpar = false;
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
        btnLimpar = true;
    } catch (error) {
        tela.value = "Erro";
    }
}

function apagaUm() {
    tela.value = tela.value.slice(0, -1);
    if (tela.value == "") {
        tela.value = 0;
        btnLimpar = true;
    }
}

// Poderia ser um if
document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "0":
            if (btnLimpar) {
                tela.value = e.key;
                btnLimpar = false;
            } else {
                tela.value += e.key;
            }
            break;
        case "1":
            if (btnLimpar) {
                tela.value = e.key;
                btnLimpar = false;
            } else {
                tela.value += e.key;
            }
            break;
        case "2":
            if (btnLimpar) {
                tela.value = e.key;
                btnLimpar = false;
            } else {
                tela.value += e.key;
            }
            break;
        case "3":
            if (btnLimpar) {
                tela.value = e.key;
                btnLimpar = false;
            } else {
                tela.value += e.key;
            }
            break;
        case "4":
            if (btnLimpar) {
                tela.value = e.key;
                btnLimpar = false;
            } else {
                tela.value += e.key;
            }
            break;
        case "5":
            if (btnLimpar) {
                tela.value = e.key;
                btnLimpar = false;
            } else {
                tela.value += e.key;
            }
            break;
        case "6":
            if (btnLimpar) {
                tela.value = e.key;
                btnLimpar = false;
            } else {
                tela.value += e.key;
            }
            break;
        case "7":
            if (btnLimpar) {
                tela.value = e.key;
                btnLimpar = false;
            } else {
                tela.value += e.key;
            }
            break;
        case "8":
            if (btnLimpar) {
                tela.value = e.key;
                btnLimpar = false;
            } else {
                tela.value += e.key;
            }
            break;
        case "9":
            if (btnLimpar) {
                tela.value = e.key;
                btnLimpar = false;
            } else {
                tela.value += e.key;
            }
            break;
        case ".":
            if (btnLimpar) {
                tela.value = e.key;
                btnLimpar = false;
            } else {
                tela.value += e.key;
            }
            break;
        case "+":
            if (btnLimpar) {
                tela.value = e.key;
                btnLimpar = false;
            } else {
                tela.value += e.key;
            }
            break;
        case "/":
            if (btnLimpar) {
                tela.value = e.key;
                btnLimpar = false;
            } else {
                tela.value += e.key;
            }
            break;
        case "*":
            if (btnLimpar) {
                tela.value = e.key;
                btnLimpar = false;
            } else {
                tela.value += e.key;
            }
            break;
        case "-":
            if (btnLimpar) {
                tela.value = e.key;
                btnLimpar = false;
            } else {
                tela.value += e.key;
            }
            break;
        case "c":
            limpaTela();
            break;
        case "=":
            calcular();
            break;
        case "Enter":
            calcular();
            break;
        case "Backspace":
            apagaUm();
            break;
    }
});
