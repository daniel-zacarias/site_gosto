var express = require('express');
const { Router } = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Time = require('../models').Time;

var idJogador;

let sessoes = [];

router.get('/', function (req, res, next) {
	console.log('Recuperando todos os Times');
	Time.findAndCountAll().then(resultado => {
		console.log(`${resultado.count} registros`);

		res.json(resultado.rows);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});
/*SAIR DE  UM TIME*/ 
router.get('/sair/:usuario/', function (req, res, next){
	let usuario = req.params.usuario;
	let query = `update jogadores set fktime = null where idjogador = ${usuario}`;

	sequelize.query(query ).then(resultado => {
		res.json({'Mensagem': 'Você saiu do time'});
	});
	
});
/*ENTRAR EM UM TIME*/ 
router.get('/entrar/:time/:rota/:idUser', function (req, res, next) {
	let time = req.params.time;
	let rota = req.params.rota;
	idJogador = req.params.idUser;
	let query = `select fkrota as rota, nick as NICK, nometime as time, nomecampeao as Campeao, nomeRota  from timeLOL, jogadores, 
	campeao, rota  where idtime = ${time} and fkrota = ${rota} and fkrota = idrota and fktime = idtime and fkcampeao = idcampeao`;
	sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			if (resultado.length == 0) {
				console.log('Vaga disponivel');
				let query = `select fktime, nick as NICK from  jogadores where idjogador = ${idJogador}`;
				sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
					.then(resultado => {
						if (resultado[0].time == null) {
							console.log(resultado[0].time);
							let query = `update jogadores set fktime = ${time} where idjogador = ${idJogador};`;
							sequelize.query(query).then(() => {
								res.json({'Mensagem': `Alteração feita com sucesso do usuario:${resultado[0].NICK}`  });
								console.log('inserção feita com sucesso');
							})
							console.log('Vaga disponivel');
						}
						else {
							res.json({'Mensagem': 'Você já tem um time'});
							console.log(resultado[0].time);
							console.log('Você já tem um time');
						}
					})
			}
			else {
				res.json({'Mensagem': `Vaga de ${resultado[0].nomeRota} não disponivel`, 
			
			'teste': false});
				console.log('Vaga não disponivel');
				let query = `update jogadores set fktime = null where idjogador = ${idJogador};`;
				sequelize.query(query)
			}
		});
});

router.get('/verificarTime/:idtime', function(req, res, next){
	let idtime = req.params.idtime;
	let query = `select Nick, fkrota, NomeTIme from jogadores , timeLOL where fktime = ${idtime} and fktime = idtime`;
	sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			if(resultado.length != 0){
			res.json(resultado);
			console.log(resultado);
			}
			else{
				let query = `select NomeTIme from timeLOL where idTime = ${idtime}`;
				sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
				.then(resultado => {
					res.json(resultado)
				})
			}
});
});

module.exports = router;