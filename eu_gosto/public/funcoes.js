let login_usuario;
let nome_usuario;
let campeao_usuario;
let Rota_usuario;
let id_usuario;

const campeao = ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 'Aurelion Sol', 'Azir', 'Bardo',
        'Blitz', 'Brand', 'Braum', 'Caitlyn', 'Camille', 'Cassiopeia', "Cho'Gath", 'Corki', 'Darius', 'Diana', 'Dr. Mundo', 'Draven', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'GangPlank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Hecarim', 'Heimerdinger', 'Illaoi',
        'Irelia', 'Ivern', 'Janna', 'Jarvan', 'Jax', 'jayce', 'Jhin', 'Jinx', "Kai'sa", 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', "Kha'zix", 'Kindreds', 'Kled', "Kog'waw", 'LeBlanc', 'Lee Sin', 'Leona', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'Master Yi', 'Miss Fortune', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Neeko', 'NidaLee', 'Nocturne', 'Nunu e Willump', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 'Quinn', 'Rakan', 'Rammus', "Rek'Sai", 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Sejuani', 'Senna', 'Sett', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Sylas',
        'Syndra', 'Tahm Kench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'Twisted Fate', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', "Vel'Koz", 'Vi', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong',
        'Xayah', 'Xerath', 'Xin Zhao', 'Yasuo', 'Yorick', 'Yuumi', 'Zac', 'Zed', 'Ziggs', 'Zillean', 'Zoe', 'Zyra'
    ];

    console.log(campeao.length);
const rota = ['TOPO', 'SELVA','MEIO', 'ATIRADOR', 'SUPORTE']
function redirecionar_login() {
    window.location.href = 'login.html';
}

function verificar_autenticacao() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    campeao_usuario = sessionStorage.fkCampeao_meuapp;
    Rota_usuario = sessionStorage.fkRota_meuapp;
    id_usuario = sessionStorage.id_usuario_meuapp;
    if (login_usuario == undefined)  {
        
    } else {
        try{
        btns[0].style.display = 'none';
        btns[1].style.display = 'none';
        btnPerfil.style.display = 'block';
        document.getElementsByClassName('times')[0].style.display = 'block'
        }catch{}
        Nick_Perfil.innerHTML = nome_usuario;
        rotaIMG.src = `css/imagens/${Rota_usuario}.png`;
        rotaNome.innerHTML = rota[Rota_usuario - 1];
        nomeCampeao.innerHTML = campeao[campeao_usuario - 1 ];
        if(document.getElementsByClassName('btnIsc')[0]!= undefined) 
        document.getElementsByClassName('btnIsc')[0].style.display = 'none';
        validar_sessao();
    }
    
}

function alterarInfo(){
    fetch(`/usuarios/sessao/${id_usuario}`)
    .then()
}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, {cache:'no-store'})
    .then(resposta => {
        if (resposta.ok) {
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);    
            });
        } else {
            console.error('Sessão :.( ');
            logoff();
        } 
    });    
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, {cache:'no-store'}); 
}