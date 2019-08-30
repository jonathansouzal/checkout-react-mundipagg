const db = require('../../../database/dbConexao');

module.exports = class produtoModel {
    static getTodos(callback){
        return db.query("SELECT * FROM champsfitness", callback);
    }

    static getId(id, callback){
        return db.query("SELECT * FROM champsfitness WHERE id = ?", [id], callback);
    }

    // static getIdPreco(preco, callback){
    //     return db.query("SELECT * FROM champsfitness WHERE preco = ?", [preco], callback);
    // }

    // static getIdNome(nome, callback){
    //     return db.query("SELECT * FROM champsfitness WHERE nome = ?", [nome], callback);
    // }

    // static getIdMatricula(matricula, callback){
    //     return db.query("SELECT * FROM champsfitness WHERE matricula = ?", [matricula], callback);
    // }

    static adicionar(champsfitness, callback){
        return db.query("INSERT INTO champsfitness (id, idf3, nome, matricula, preco) VALUES(?, ?, ?, ?, ?)",
        [champsfitness.id, champsfitness.idf3, champsfitness.nome, champsfitness.matricula, champsfitness.preco], callback);
    }

    static deletar(id, callback) {
        return db.query("DELETE FROM champsfitness WHERE id = ?", [id], callback)
    }

    static editar(champsfitness, callback) {
        return db.query("UPDATE champsfitness SET descricao = ?, detalhes = ? WHERE champsfitness = ?",
        [champsfitness.id, champsfitness.idf3, champsfitness.nome, champsfitness.matricula, champsfitness.preco], callback)
    }


};

