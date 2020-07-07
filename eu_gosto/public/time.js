
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
    btn1.addEventListener('click', () => {
        // criarPerfilTime();
        verificarTime(btn1.value, 1);
        document.getElementsByClassName('sobreposicao')[2].style.display = 'block';
    })
    btn2.addEventListener('click', () => {
        document.getElementsByClassName('aguardar')[0].style.display = 'block';
        entrarNoTime(btn2);

        atualizar();

    });
    btn3.addEventListener('click', () => {
        btn3.disabled = true;
        document.getElementsByClassName('aguardar')[0].style.display = 'block'

        sairDoTime(btn3);
        atualizar();
    })

    return [btn1, btn2, btn3];
}

function teste() {
    var a = [];
    for (cont = 0; cont < 4; cont++) {
        let number = parseInt(Math.random() * 4 + 1);
        if (a.indexOf(number) == -1)
            a.push(number);
        else
            cont--;
    }
    console.log(a);
}





function entrarNoTime(botao) {
    fetch(`/times/entrar/${botao.value}/${sessionStorage.fkRota_meuapp}/${sessionStorage.id_usuario_meuapp}`).then(resposta => {
        if (resposta.ok) {
            resposta.json().then(json => {
                if(json.teste == false){
                    let confirmar = window.confirm(json.Mensagem);
                    if(confirmar == true){
                        console.log('sim')
                    }
                    else{
                        console.log('não')
                    }
                }
                else{
                    alert(json.Mensagem); 
                }
                
            })
            verificarTime(botao.value, 0);
            atualizar();
            document.getElementsByClassName('aguardar')[0].style.display = 'none';
        }
    });


    return false
}

function sairDoTime(botao) {
    fetch(`/times/sair/${sessionStorage.id_usuario_meuapp}`).then(resposta => {
        if (resposta.ok) {
            
            resposta.json().then(json => {
                alert(json.Mensagem);
                
            });
            verificarTime(botao.value, 0);
            atualizar();
            sessionStorage.nometime_meuapp = undefined; 
            document.getElementsByClassName('aguardar')[0].style.display = 'none'


        }
    });

    return false
}

function criarPerfilTime(dados) {
    let div = document.querySelector('.Perfiltime table');
    TimeNome.innerHTML = dados[0].NomeTIme;
    div.innerHTML = '';
    let texto = [, , , ,];
    if (dados[0].Nick != undefined) {
        for (let index = 0; index < dados.length; index++) {
            texto[dados[index].fkrota - 1] = dados[index].Nick;
        }
    }
    let table = document.createElement('table');
    for (a = 0; a < 5; a++) {

        let img = document.createElement('img');
        let td = {
            rota: document.createElement('td'),
            Nick: document.createElement('td')
        };
        let th = {
            rota: document.createElement('th'),
            Nick: document.createElement('th')
        }
        let tr = document.createElement('tr');
        div.appendChild(table);
        if (a == 0) {

            let tr = document.createElement('tr');
            th.rota.innerHTML = 'rota';
            th.Nick.innerHTML = 'Nick';
            tr.appendChild(th.rota);
            tr.appendChild(th.Nick);
            table.appendChild(tr);
        }
        table.appendChild(tr);

        img.src = `../css/imagens/${a + 1}.png`
        td.rota.appendChild(img);
        if (texto[a] == undefined)
            texto[a] = 'Vaga disponível'
        td.Nick.innerHTML = texto[a];
        td.Nick.style.fontSize = '35px'
        tr.appendChild(td.rota);
        tr.appendChild(td.Nick);
    }
}

function verificarTime(valor, tela) {
    fetch(`times/verificartime/${valor}`)
        .then(resposta => {
            if (resposta.ok) {
                resposta.json().then(json => {
                    criarPerfilTime(json);
                })
                if (tela == 1)
                    document.getElementsByClassName('sobreposicao')[2].style.display = 'block';
            }
        })
}

function factory(elemento) {
    let jason = {
        rota: document.createElement(elemento),
        Nick: document.createElement(elemento)
    }
    return jason;
}