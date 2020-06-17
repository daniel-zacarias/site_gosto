create database hLol;

use hLol;

create table campeao(
idcampeao int primary key auto_increment,
NomeCampeao varchar(45));


create table rota(
idRota int primary key ,
NomeRota varchar(8));

select * from rota;

create table timeLOL(
idTime int primary key,
NomeTIme varchar(45));

create table jogador(
idJogador int primary key auto_increment,
nomeJogador varchar(45), 
Nick varchar(30),
email varchar(45),
senha varchar(45),
dataNascimento date,
fkrota int ,
foreign key (fkrota) references rota(idrota),
fkcampeao int ,
foreign key (fkcampeao) references  campeao(idcampeao),
fktime int default null,
foreign key (fktime) references timeLOL(idTime)
);

drop table jogador;



ALTER USER 'teste2' IDENTIFIED WITH mysql_native_password BY 'bandtec';

insert into rota values(1,'TOPO') , (2,'SELVA'),(3,'MEIO'), (4,'ATIRADOR'),(5,'SUPORTE');

desc campeao;
ALTER USER 'teste2'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Bandtec123';
flush privileges;
select *  from campeao; 


insert into jogador values(1,'Daniel Soares Zacarias dos Santos','DSZDS','DanielSantos19.anjo@hotmail.com','1234','2002-11-20',1, 1, null);

select nomejogador, nick, email, md5(senha) as senha, NomeRota as 'Principal Rota', NomeCampeao as 'Campeão Favorito' from jogador, rota, campeao where idcampeao = fkcampeao and idrota = fkrota;

