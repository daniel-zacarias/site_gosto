const db = require('./input');


let insercao = function insercao() {
    let sql = 'insert into jogador ';
    db.query(sql,[presenca[0],presenca[1],presenca[2],presenca[3], situacao], function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });
}