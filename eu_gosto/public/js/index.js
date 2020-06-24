const express = require('express');
const App = express();
const Sequelize = require('sequelize') ;
const bodyParser = require('body-parser');
const sequelize = new Sequelize('hlol', 'Admin', 'admin', {
    host:"localhost",
    dialect:'mysql'
})

App.use(bodyParser.urlencoded({extended:false}));
App.use(bodyParser.json())

sequelize.authenticate().then(function (){
    console.log('conectado')
}).catch(function (erro){
    console.log('Deu erro:' + erro)
});

App.post('/cadastrar', function(req, res){
    usuario.create({
        nomeJogador: req.body.Nome,
        nick: req.body.NickC,
        email:req.body.Email,
        senha: req.body.senha,
        dataDeNascimento: req.body.DataNasc,
        fkrota:req.body.Rota,
        fkcampeao: req.body.campeao
    }).then(function (){
        console.log('Inserção com sucesso')
    }).catch(function (erro){
        console.log(erro);

    })
        
    
});





    // App.listen(8081,function(){
    //     console.log('rodando no servidor http://localhost:8081/')
    // } );
    // usuario.create({
    //     nomeJogador: 'Daniel Soares',
    //     nick: 'DSZDS',
    //     email:'Daniel.santos@bandtec.com.br',
    //     senha: '123',
    //     dataDeNascimento: '2002-11-20',
    //     fkcampeao:1,
    //     fkrota:1
    // })

