var mysql = require('mysql');
 var con = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'Admin',
    password : 'admin',
    database : 'hLol'
  });


//   const campeao = ['Aatrox', 'Ahri','Akali', 'Alistar' , 'Amumu','Anivia','Annie','Aphelios', 'Ashe' ,'Aurelion Sol','Azir','Bardo',
// 'Blitz','Brand','Braum','Caitlyn', 'Camille', 'Cassiopeia', "Cho'Gath", 'Corki', 'Darius', 'Diana', 'Dr. Mundo','Draven', 'Ekko', 'Elise','Evelynn', 'Ezreal','Fiddlesticks' ,'Fiora', 'Fizz', 'Galio', 'GangPlank','Garen', 'Gnar','Gragas', 'Graves', 'Hecarim', 'Heimerdinger', 'Illaoi',
// 'Irelia', 'Ivern', 'Janna', 'Jarvan', 'Jax','jayce', 'Jhin', 'Jinx', "Kai'sa", 'Kalista', 'Karma', 'Karthus', 'Kassadin','Katarina', 'Kayle', 'Kayn', 'Kennen', "Kha'zix", 'Kindreds', 'Kled', "Kog'waw",'LeBlanc','Lee Sin','Leona','Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar','Maokai', 'Master Yi', 'Miss Fortune', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus','Neeko', 'NidaLee', 'Nocturne', 'Nunu e Willump', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke','Qiyana', 'Quinn','rakan', 'Rammus', "Rek'Sai", 'Renekton', 'Rengar','Riven','Rumble','Ryze','Sejuani','Senna','Sett','Shaco','Shen','Shyvana','Singed','Sion','Sivir','Skarner','Sona','Soraka','Swain','Sylas',
// 'Syndra','Tahm Kench','Taliyah','Talon','Taric','Teemo','Thresh','Tristana','Trundle','Tryndamere','Twisted Fate','Twitch','Udyr','Urgot','Varus','Vayne','Veigar',"Vel'Koz",'Vi','Viktor','Vladimir','Volibear','Warwick','Wukong',
// 'Xayah','Xerath','Xin Zhao','Yasuo','Yorick','Yuumi','Zac','Zed','Ziggs','Zillean', 'Zoe', 'Zyra'
// ];

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });



  
module.exports = con;



// console.log(campeao.length);

  
