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

create table jogadores(
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

drop table jogadores;
select * from jogadores;

insert into campeao(nomecampeao) values('Aatrox')
insert into campeao(nomecampeao) values('Ahri')
insert into campeao(nomecampeao) values('Akali')
insert into campeao(nomecampeao) values('Alistar')
insert into campeao(nomecampeao) values('Amumu')
insert into campeao(nomecampeao) values('Anivia')
insert into campeao(nomecampeao) values('Annie')
insert into campeao(nomecampeao) values('Aphelios')
insert into campeao(nomecampeao) values('Ashe')
insert into campeao(nomecampeao) values('Aurelion Sol')
insert into campeao(nomecampeao) values('Azir')
insert into campeao(nomecampeao) values('Bardo')
insert into campeao(nomecampeao) values('Blitz')
insert into campeao(nomecampeao) values('Brand')
insert into campeao(nomecampeao) values('Braum')
insert into campeao(nomecampeao) values('Caitlyn')
insert into campeao(nomecampeao) values('Camille')
insert into campeao(nomecampeao) values('Cassiopeia')
insert into campeao(nomecampeao) values('ChoGath')
insert into campeao(nomecampeao) values('Corki')
insert into campeao(nomecampeao) values('Darius')
insert into campeao(nomecampeao) values('Diana')
insert into campeao(nomecampeao) values('Dr. Mundo')
insert into campeao(nomecampeao) values('Draven')
insert into campeao(nomecampeao) values('Ekko')
insert into campeao(nomecampeao) values('Elise')
insert into campeao(nomecampeao) values('Evelynn')
insert into campeao(nomecampeao) values('Ezreal')
insert into campeao(nomecampeao) values('Fiddlesticks')
insert into campeao(nomecampeao) values('Fiora')
insert into campeao(nomecampeao) values('Fizz')
insert into campeao(nomecampeao) values('Galio')
insert into campeao(nomecampeao) values('GangPlank')
insert into campeao(nomecampeao) values('Garen')
insert into campeao(nomecampeao) values('Gnar')
insert into campeao(nomecampeao) values('Gragas')
insert into campeao(nomecampeao) values('Graves')
insert into campeao(nomecampeao) values('Hecarim')
insert into campeao(nomecampeao) values('Heimerdinger')
insert into campeao(nomecampeao) values('Illaoi')
insert into campeao(nomecampeao) values('Irelia')
insert into campeao(nomecampeao) values('Ivern')
insert into campeao(nomecampeao) values('Janna')
insert into campeao(nomecampeao) values('Jarvan')
insert into campeao(nomecampeao) values('Jax')
insert into campeao(nomecampeao) values('jayce')
insert into campeao(nomecampeao) values('Jhin')
insert into campeao(nomecampeao) values('Jinx')
insert into campeao(nomecampeao) values('Kaisa')
insert into campeao(nomecampeao) values('Kalista')
insert into campeao(nomecampeao) values('Karma')
insert into campeao(nomecampeao) values('Karthus')
insert into campeao(nomecampeao) values('Kassadin')
insert into campeao(nomecampeao) values('Katarina')
insert into campeao(nomecampeao) values('Kayle')
insert into campeao(nomecampeao) values('Kayn')
insert into campeao(nomecampeao) values('Kennen')
insert into campeao(nomecampeao) values('Khazix')
insert into campeao(nomecampeao) values('Kindreds')
insert into campeao(nomecampeao) values('Kled')
insert into campeao(nomecampeao) values('Kogwaw')
insert into campeao(nomecampeao) values('LeBlanc')
insert into campeao(nomecampeao) values('Lee Sin')
insert into campeao(nomecampeao) values('Leona')
insert into campeao(nomecampeao) values('Lissandra')
insert into campeao(nomecampeao) values('Lucian')
insert into campeao(nomecampeao) values('Lulu')
insert into campeao(nomecampeao) values('Lux')
insert into campeao(nomecampeao) values('Malphite')
insert into campeao(nomecampeao) values('Malzahar')
insert into campeao(nomecampeao) values('Maokai')
insert into campeao(nomecampeao) values('Master Yi')
insert into campeao(nomecampeao) values('Miss Fortune')
insert into campeao(nomecampeao) values('Mordekaiser')
insert into campeao(nomecampeao) values('Morgana')
insert into campeao(nomecampeao) values('Nami')
insert into campeao(nomecampeao) values('Nasus')
insert into campeao(nomecampeao) values('Nautilus')
insert into campeao(nomecampeao) values('Neeko')
insert into campeao(nomecampeao) values('NidaLee')
insert into campeao(nomecampeao) values('Nocturne')
insert into campeao(nomecampeao) values('Nunu e Willump')
insert into campeao(nomecampeao) values('Olaf')
insert into campeao(nomecampeao) values('Orianna')
insert into campeao(nomecampeao) values('Ornn')
insert into campeao(nomecampeao) values('Pantheon')
insert into campeao(nomecampeao) values('Poppy')
insert into campeao(nomecampeao) values('Pyke')
insert into campeao(nomecampeao) values('Qiyana')
insert into campeao(nomecampeao) values('Quinn')
insert into campeao(nomecampeao) values('rakan')
insert into campeao(nomecampeao) values('Rammus')
insert into campeao(nomecampeao) values('RekSai')
insert into campeao(nomecampeao) values('Renekton')
insert into campeao(nomecampeao) values('Rengar')
insert into campeao(nomecampeao) values('Riven')
insert into campeao(nomecampeao) values('Rumble')
insert into campeao(nomecampeao) values('Ryze')
insert into campeao(nomecampeao) values('Sejuani')
insert into campeao(nomecampeao) values('Senna')
insert into campeao(nomecampeao) values('Sett')
insert into campeao(nomecampeao) values('Shaco')
insert into campeao(nomecampeao) values('Shen')
insert into campeao(nomecampeao) values('Shyvana')
insert into campeao(nomecampeao) values('Singed')
insert into campeao(nomecampeao) values('Sion')
insert into campeao(nomecampeao) values('Sivir')
insert into campeao(nomecampeao) values('Skarner')
insert into campeao(nomecampeao) values('Sona')
insert into campeao(nomecampeao) values('Soraka')
insert into campeao(nomecampeao) values('Swain')
insert into campeao(nomecampeao) values('Sylas')
insert into campeao(nomecampeao) values('Syndra')
insert into campeao(nomecampeao) values('Tahm Kench')
insert into campeao(nomecampeao) values('Taliyah')
insert into campeao(nomecampeao) values('Talon')
insert into campeao(nomecampeao) values('Taric')
insert into campeao(nomecampeao) values('Teemo')
insert into campeao(nomecampeao) values('Thresh')
insert into campeao(nomecampeao) values('Tristana')
insert into campeao(nomecampeao) values('Trundle')
insert into campeao(nomecampeao) values('Tryndamere')
insert into campeao(nomecampeao) values('Twisted Fate')
insert into campeao(nomecampeao) values('Twitch')
insert into campeao(nomecampeao) values('Udyr')
insert into campeao(nomecampeao) values('Urgot')
insert into campeao(nomecampeao) values('Varus')
insert into campeao(nomecampeao) values('Vayne')
insert into campeao(nomecampeao) values('Veigar')
insert into campeao(nomecampeao) values('VelKoz')
insert into campeao(nomecampeao) values('Vi')
insert into campeao(nomecampeao) values('Viktor')
insert into campeao(nomecampeao) values('Vladimir')
insert into campeao(nomecampeao) values('Volibear')
insert into campeao(nomecampeao) values('Warwick')
insert into campeao(nomecampeao) values('Wukong')
insert into campeao(nomecampeao) values('Xayah')
insert into campeao(nomecampeao) values('Xerath')
insert into campeao(nomecampeao) values('Xin Zhao')
insert into campeao(nomecampeao) values('Yasuo')
insert into campeao(nomecampeao) values('Yorick')
insert into campeao(nomecampeao) values('Yuumi')
insert into campeao(nomecampeao) values('Zac')
insert into campeao(nomecampeao) values('Zed')
insert into campeao(nomecampeao) values('Ziggs')
insert into campeao(nomecampeao) values('Zillean')
insert into campeao(nomecampeao) values('Zoe')
insert into campeao(nomecampeao) values('Zyra')


ALTER USER 'teste2' IDENTIFIED WITH mysql_native_password BY 'bandtec';

insert into rota values(1,'TOPO') , (2,'SELVA'),(3,'MEIO'), (4,'ATIRADOR'),(5,'SUPORTE');

desc campeao;
ALTER USER 'teste2'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Bandtec123';
flush privileges;
select *  from campeao ; 


insert into jogadores values(1,'Daniel Soares Zacarias dos Santos','DSZDS','DanielSantos19.anjo@hotmail.com','1234','2002-11-20',1, 140, null);

select nomejogador, nick, email, md5(senha) as senha, NomeRota as 'Principal Rota', NomeCampeao as 'Campeão Favorito' from jogador, rota, campeao where idcampeao = fkcampeao and idrota = fkrota;

