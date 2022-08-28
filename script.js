var sdireito = document.getElementById("s-direito");
var largura = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
}

function cad() {
    var key = Math.floor(Math.random() * 1000 + 1);
    var nome = document.getElementById("nome").value;
    var tel = document.getElementById("tel").value;
    var end = document.getElementById("endereco").value;
    var cpf = document.getElementById("cpf").value;
    var mail = document.getElementById("mail").value;
    var senha = document.getElementById("senha").value;
    var senha_ver = document.getElementById("verifica-senha").value;

    if (senha != senha_ver) {
        document.getElementById("invalido").innerHTML = " As senhas devem ser iguais. ";
        return false;
    } else {
        var usuario = { nome_: nome, tel_: tel, end_: end, cpf_: cpf, mail_: mail, senha_: senha };
        localStorage.setItem(key, JSON.stringify(usuario));
        alert("Usuário(a) cadastrado(a) com sucesso!")
        window.location.href = "login.html";
    }
    return false;
}

function verificar() {
    var v_senha = document.getElementById("senha").value;
    var v_mail = document.getElementById("mail").value;

    for (let i = 0; i < localStorage.length; i++) {

        let id = localStorage.key(i);
        let dados = localStorage.getItem(id);
        var users = JSON.parse(dados);
        if (users.senha_ === v_senha && users.mail_ === v_mail) {
            var key = "userlog";
            localStorage.setItem(key,id);
            window.location.href = "pagina-curso.html";
            break;
        } else {
            document.getElementById("invalido").innerHTML = " Usuário e/ou Senha Inválido(s)";
        }

    }
    return false;
}

function reset() {
    sdireito.style.backgroundImage = "";
    sdireito.innerHTML = ``;
}

function Inicio(obj) {
    reset()
    obj.style.backgroundColor = 'green';
    if (largura > 1000) {
        sdireito.style.backgroundImage = "url('img/Slide1.PNG')";
    } else {
        sdireito.style.backgroundImage = "url('img/Slide1p.png')";
    }
}

function Aula1(obj) {
    reset()
    obj.style.backgroundColor = 'green';
    sdireito.innerHTML = `<iframe class="video-aula" src="https://www.youtube.com/embed/udFYDWN02r8?start=40" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

}

function Aula2(obj) {
    reset()
    obj.style.backgroundColor = 'green';

    if (largura > 1000) {
        sdireito.style.backgroundImage = "url('img/Slide2.PNG')";
    } else {
        sdireito.style.backgroundImage = "url('img/Slide2p.png')";
    }
}

function Aula3(obj) {
    reset()
    obj.style.backgroundColor = 'green';

    if (largura > 1000) {
        sdireito.style.backgroundImage = "url('img/Slide3.PNG')";
    } else {
        sdireito.style.backgroundImage = "url('img/Slide3p.png')";
    }

}

function Aula4(obj) {
    reset()
    obj.style.backgroundColor = 'green';

    if (largura > 1000) {
        sdireito.style.backgroundImage = "url('img/Slide4.PNG')";
    } else {
        sdireito.style.backgroundImage = "url('img/Slide4p.png')";
    }
}

function Aula5(obj) {
    reset()
    obj.style.backgroundColor = 'green';

    if (largura > 1000) {
        sdireito.style.backgroundImage = "url('img/Slide5.PNG')";
    } else {
        sdireito.style.backgroundImage = "url('img/Slide5p.png')";
    }
}

function Aula6(obj) {
    reset()
    obj.style.backgroundColor = 'green';
    document.getElementById("botao").style.display = "block";
    if (largura > 1000) {
        sdireito.style.backgroundImage = "url('img/Slide6.PNG')";
    } else {
        sdireito.style.backgroundImage = "url('img/Slide6p.png')";
    }
}

var contador = 0;
var contChances = 0;

                    
function check() {
    contChances++;
    for (let i = 1; i <= 12; i++) {
        if (document.getElementById("certa"+i).checked) {
            contador++;
        }
    }

    document.getElementById("titulo").textContent = "Tentativa "+contChances; 

    if(contador >= 9){
        document.getElementById("btn2").style.display = "block";
        document.getElementById("btn").style.display = "none";
        document.getElementById("titulo").textContent = "PARABÉNS, VOCÊ FOI APROVADO!!";
        document.getElementById("titulo").style.color = "#fdac00";
    }

    alert("Você acertou "+contador+" questões");
    contador = 0;

    if(contChances == 3){
        alert("Você excedeu o limite de tentativas");
        
        var button = document.getElementById("btn");

        button.setAttribute("disabled", "disabled");
    }
}

window.onload = function certificado(){
    let id = "userlog";
    let id1 = localStorage.getItem(id);
    let id2 = localStorage.getItem(id1);
    var dados = JSON.parse(id2);
    document.getElementById("nome").innerHTML = dados.nome_;
    document.getElementById("cpf").innerHTML = dados.cpf_;
}