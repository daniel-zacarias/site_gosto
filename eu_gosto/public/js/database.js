const db = require('./input');
const input = document.querySelectorAll("input");

// const campeao = ['Aatrox', 'Ahri','Akali', 'Alistar' , 'Amumu','Anivia','Annie','Ashe', , 'Aphelios','Aurelion Sol','Azir',
// 'Blitz','Brand','Braum','Caitlyn', 'Camille', 'Cassiopeia', "Cho'Gath", 'Corki', 'Darius', 'Diana', 'Dr. Mundo','Draven','Draven', 'Ekko', 'Elise','Evelynn', 'Ezreal','Fiddlesticks' ,'Fiora', 'Fizz', 'Galio', 'GangPlank','Garen', 'Gnar','Gragas', 'Graves', 'Hecarim', 'Heimerdinger', 'Illaoi',
// 'Irelia', 'Ivern', 'Janna', 'Jarvan', 'Jax','jayce', 'Jhin', 'Jinx', "Kai'sa", 'Kalista', 'Karma', 'Karthus', 'Kassadin','Katarina', 'Kayle', 'Kayn', 'Kennen', "Kha'zix", 'Kindreds', 'Kled', "Kog'waw",'Kled', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar','Maokai', 'Master Yi', 'Miss Fortune', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus','Neeko', 'NidaLee', 'Nocturne', 'Nunu e Willump', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke','Qiyana', 'Quinn','rakan', 'Rammus', "Rek'Sai", 'Renekton', 'Rengar','Riven','Rumble','Ryze','Sejuani','Senna','Sett','Shaco','Shen','Shyvana','Singed','Sion','Sivir','Skarner','Sona','Soraka','Swain','Sylas',
// 'Syndra','Tahm Kench','Taliyah','Talon','Taric','Teemo','Thresh','Tristana','Trundle','Tryndamere','Twisted Fate','Twitch','Udyr','Urgot','Varus','Vayne','Veigar',"Vel'Koz",'Vi','Viktor','Vladimir','Volibear','Warwick','Wukong',
// 'Xayah','Xerath','Xin Zhao','Yasuo','Yorick','Yuumi','Zac','Zed','Ziggs','Zillean', 'Zoe', 'Zyra'
// ]

for(let cont = 0;cont< campeao.length; cont++){
    slcCampeao.innerHTML += `<option value="${cont+1}">${campeao[cont]}</option>` 
}

function insercao() {
    let sql = 'insert into jogador(nomeJogador,Nick,Email,senha,dataNascimento,fkrota,fkcampeao ) values(null,?)';
    db.query(sql,[], function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });
}