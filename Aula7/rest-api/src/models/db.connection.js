const mysql = require("mysql");
const dbConfig = require("../config/db.config")

const connection = mysql.createPool({
    host : dbConfig.HOST,
    user : dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

//Teste de conexao
// connection.getConnection(function(err){
//     if(err){
//         return console.error('error: ' + err.message);
//     }

//     console.log('Connected to the mysql server!')
// });

module.exports = connection;