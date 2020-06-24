var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Leitura = require('../models').Leitura;

/* Recuperar as últimas N leituras */
router.get('/ultimas', function(req, res, next) {
	
	// quantas são as últimas leituras que quer? 8 está bom?
	const limite_linhas = 7;

	console.log(`Recuperando as últimas ${limite_linhas} leituras`);
	
	const instrucaoSql = `select top ${limite_linhas} 
						idhistorico,
						Situacao,
						fkescaninho, 
						DataeHora, 
						FORMAT(DataeHora,'HH:mm:ss') as momento_grafico 
						from historico order by idhistorico;`;
						

	sequelize.query(instrucaoSql, {
		model: Leitura,
		mapToModel: true 
	  })
	  .then(resultado => {
			console.log(`Encontrados: ${resultado.length}`);
			res.json(resultado);
	  }).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
	  });
});


// tempo real (último valor de cada leitura)
router.get('/tempo-real', function (req, res, next) {
	
	console.log(`Recuperando a última leitura`);

	const instrucaoSql = `select * from historico as a where a.idhistorico in (select max(b.idhistorico) from historico as b group by b.fkEscaninho) ;`;

	// `select top 1 
	// idhistorico,
	// Situacao,
	// fkescaninho, 
	// DataeHora, 
	// FORMAT(DataeHora,'HH:mm:ss') as momento_grafico 
	// from historico;`

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});


// estatísticas (max, min, média, mediana, quartis etc)
router.get('/estatisticas', function (req, res, next) {
	
	console.log(`Recuperando as estatísticas atuais`);

	const instrucaoSql = `select datename(weekday,DataeHora) as 'Dia_semana',avg(situacao) as 'média' from historico 
	where DataeHora between '2020-06-13' and '2020-06-20' group by datename(weekday,DataeHora); `;

	/*select datename(weekday,DataeHora) as 'Dia_semana',avg(situacao) as 'média' from historico 
	where DataeHora between '${input1}' and '${input2}' group by datename(weekday,DataeHora); `
	*/
	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});


module.exports = router;
