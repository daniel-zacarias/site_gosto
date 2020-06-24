'use strict';

module.exports = (sequelize, DataTypes) => {
    let Time = sequelize.define('Time',{
		id: {
			field: 'idTime',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nomeTime',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'timeLOL', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Time;
};