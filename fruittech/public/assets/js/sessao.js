// sessão
function validarSessao() {
    var idFunc = sessionStorage.ID_FUNCIONARIO;
    var nomeFunc = sessionStorage.NOME_FUNCIONARIO;

    var idTransp = sessionStorage.ID_TRANSPORTADORA;
    var nomeTransp = sessionStorage.NOME_TRANSPORTADORA;

    var nameSession = document.getElementById("name_session");

    if (idFunc != null && nomeFunc != null) {
        nameSession.innerHTML =  `Bem vindo! ${nomeFunc}`
    } else if (idTransp != null && nomeTransp != null) {
        nameSession.innerHTML = `<div style=" text-align: center;">Bem vindo! <span id="name_"> ${nomeTransp}</span></div>`;;
    } else {
        window.location = "../index.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

