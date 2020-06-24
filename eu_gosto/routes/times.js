var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Time = require('../models').Time;

let sessoes = [];

router.get('/', function(req, res, next) {
	console.log('Recuperando todos os Times');
	Time.findAndCountAll().then(resultado => {
		console.log(`${resultado.count} registros`);

		res.json(resultado.rows);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

module.exports = router;