'use strict';

// aqui temos o ORM da tabela 'usuário'
/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		id: {
			field: 'idJogador',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nomeJogador',
			type: DataTypes.STRING,
			allowNull: false
		},
		nick: {
			field: 'Nick',
			type: DataTypes.STRING,
			allowNull: false
		},
		Email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		},
		Data: {
			field: 'dataNascimento',
			type: DataTypes.STRING,
			allowNull: false
		},
		fkrota:{
			field: 'fkrota',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		fkcampeao:{
			field: 'fkcampeao',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		fktime:{
			field: 'fktime',
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, 
	{
		tableName: 'jogadores', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
