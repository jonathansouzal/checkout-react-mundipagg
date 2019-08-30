const mysql = require('mysql');

const conexao = mysql.createPool({
        host: 'recorrentedb-cluster.cluster-cerz9iqvkuhm.us-east-1.rds.amazonaws.com',
        database: 'recorrenteDB',
        user : 'recorrenteDB',
        password : 'Dy3Js6xygX8JyCA'
});

module.exports = conexao;