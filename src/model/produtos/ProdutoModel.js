const db = require('../../../database/dbConexao');

module.exports = class produtoModel {
    static getTodosAtividade(callback){
        return db.query("SELECT * FROM atividade", callback);
    }
    // eslint-disable-next-line no-dupe-class-members
    static getTodosMatricula(callback){
        return db.query("SELECT * FROM matricula", callback);
    }


    static getClass_id(class_id, callback){
        return db.query("SELECT * FROM atividade WHERE class_id = ?", [class_id], callback);
    }

    static adicionar(atividade, callback){
        return db.query("INSERT INTO atividade (class_id, title, valor_matricula, valor_mensalidade) VALUES (?, ?, ?, ?)",
        [atividade.class_id, atividade.title, atividade.valor_matricula, atividade.valor_mensalidade], callback);
    }

    static deletar(class_id, callback){
        return db.query("DELETE FROM atividade WHERE class_id.atividade = ?", [class_id], callback);
    }
    
    static editar(atividade, callback){
        return db.query("UPDATE atividade SET class_id = ?, title = ?, valor_matricula = ?, valor_mensalidade = ? WHERE class_id",
         [atividade.class_id, atividade.title, atividade.valor_matricula, atividade.valor_mensalidade], callback);
    }

};

