var erros = [];

Opcoes();

function Opcoes() {
    const campeao = ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 'Aurelion Sol', 'Azir', 'Bardo',
        'Blitz', 'Brand', 'Braum', 'Caitlyn', 'Camille', 'Cassiopeia', "Cho'Gath", 'Corki', 'Darius', 'Diana', 'Dr. Mundo', 'Draven', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'GangPlank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Hecarim', 'Heimerdinger', 'Illaoi',
        'Irelia', 'Ivern', 'Janna', 'Jarvan', 'Jax', 'jayce', 'Jhin', 'Jinx', "Kai'sa", 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', "Kha'zix", 'Kindreds', 'Kled', "Kog'waw", 'LeBlanc', 'Lee Sin', 'Leona', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'Master Yi', 'Miss Fortune', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Neeko', 'NidaLee', 'Nocturne', 'Nunu e Willump', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 'Quinn', 'rakan', 'Rammus', "Rek'Sai", 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Sejuani', 'Senna', 'Sett', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Sylas',
        'Syndra', 'Tahm Kench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'Twisted Fate', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', "Vel'Koz", 'Vi', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong',
        'Xayah', 'Xerath', 'Xin Zhao', 'Yasuo', 'Yorick', 'Yuumi', 'Zac', 'Zed', 'Ziggs', 'Zillean', 'Zoe', 'Zyra'
    ];
    for (let cont = 0; cont < campeao.length; cont++) {
        try {
            slcCampeao.innerHTML += `<option value="${cont + 1}">${campeao[cont]}</option>`;
        } catch (error) {
            console.log(error);
        }
        
    }
}
function focar(elemeto){
    elemeto.offsetParent.classList.add("ativar");
}
function disfocar(elemento){
    if (elemento.value == "") // caso valor do texto for ""
            elemento.offsetParent.classList.remove("ativar");  //retira a class .ativar
}    
    // const input = document.querySelectorAll('input');  //pega todos os elementos input(const valor contante)
// for (let i = 0; i < input.length; i++) {    //contador para todos os elementos
    // input[i].addEventListener("focus", function () { // quando o campo texto for usado
         // adicione a div pai a class .ativar
    // }) 
    // input[i].addEventListener("blur", function () { //quando o campo de texto deixar de ser usado
        // if (this.value == "") // caso valor do texto for ""
        //     this.offsetParent.classList.remove("ativar");  //retira a class .ativar
    // })
// };
function verErros(erros){
    divErros.style.display = 'block';
    let lista = document.getElementById('listaErros');
    lista.innerHTML = '';
    for(i in erros){
    let li = document.createElement('li');
    li.innerHTML = erros[i];
    lista.appendChild(li);
    }
}

function validarCadastro(){
    let input = document.querySelectorAll('input');
    erros = [];
    if(input[0].value.trim()  == '' || input[0].value.trim().split(" ").length < 2  ){
        erros.push('Erro de formato: Precisa de pelo menos um sobrenome.')
    }
    if(input[1].value.trim()  == ''){
        erros.push('Erro de formato: NickName Obrigatório.')
    }

    if(input[2].value.indexOf('@') < 0 || input[2].value.trim()  == '' || !(input[2].value.trim().endsWith('.com') ||  input[2].value.trim().endsWith('.br'))){
        erros.push('Erro de formato: Email Incompatível.')
    }

    if(input[4].value.trim() == ''){
        erros.push('Digite uma senha');
    }
    else if(input[5].value.trim() == '' || input[4].value != input[5].value){
        erros.push('Senhas não são iguais');
    }

    if(!input[6].checked){
        erros.push('Você deve concordar com os termos');
    }

    if(erros.length == 0){
        alert('Cadastro feito com sucesso')
    }
    else{
        verErros(erros);
    }
}

function campeoes(){
    

    return campeao;
}




