var idUsuario = sessionStorage.id_usuario_meuapp;

function criarBotao(valor) {
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');
    let btn3 = document.createElement('button');
    btn1.innerHTML = 'Ver participantes';
    btn2.innerHTML = 'Entrar no time';
    btn3.innerHTML = 'Sair do Time';
    btn1.classList.add('btnTime');
    btn2.classList.add('btnTime');
    btn3.classList.add('btnTime', 'sair');
    if (sessionStorage.fkTime_meuapp != "null") {
        btn2.disabled = true;
    }
    else {
        btn2.disabled = false;
    }
    btn1.value = valor;
    btn2.value = valor;
    btn3.value = valor;
    btn2.addEventListener('click', () => {
        document.getElementsByClassName('aguardar')[0].style.display = 'block'

        entrarNoTime(btn2);
        
        atualizar();

    });
    btn3.addEventListener('click', () => {
        btn3.disabled = true;
        document.getElementsByClassName('aguardar')[0].style.display = 'block'
        
        sairDoTime();
        atualizar();
    })

    return [btn1, btn2, btn3];
}

function teste(botao) {
    let idTime = botao.value;
    console.log(idUsuario + ' ' + idTime);
}





function entrarNoTime(botao) {
    fetch(`/times/entrar/${botao.value}/${sessionStorage.fkRota_meuapp}/${sessionStorage.id_usuario_meuapp}`).then(resposta => {
        if (resposta.ok) {
            resposta.json().then(json => {
                alert(json.Mensagem);
            })
            atualizar();
            document.getElementsByClassName('aguardar')[0].style.display = 'none';
        }
    });


    return false
}

function sairDoTime() {
    fetch(`/times/sair/${sessionStorage.id_usuario_meuapp}`).then(resposta => {
        if (resposta.ok) {

            resposta.json().then(json => {
                alert(json.Mensagem);
            });
            atualizar();
            document.getElementsByClassName('aguardar')[0].style.display = 'none'

            
        }
    });

    return false
}