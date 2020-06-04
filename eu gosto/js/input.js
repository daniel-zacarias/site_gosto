const input = document.querySelectorAll("input");  //pega todos os elementos com a class .mudar(const valor contante)

for (let i = 0; i < input.length; i++) {    //contador para todos os elementos
    input[i].addEventListener("focus", function () { // quando o campo texto for usado
        this.offsetParent.classList.add("ativar"); // adicione a div pai a class .ativar
    }) 
    input[i].addEventListener("blur", function () { //quando o campo de texto deixar de ser usado
        if (this.value == "") // caso valor do texto for ""
            this.offsetParent.classList.remove("ativar");  //retira a class .ativar
    })
}