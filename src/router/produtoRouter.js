var express = require('express');
var router = express.Router();
var ProdutoModel = require('../model/produtos/ProdutoModel');
var RespostaClass = require('../model/RespostaClass');

router.get("/", function(req, res, next){

    ProdutoModel.getTodosAtividade(function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
        }else{
            resposta.dados = retorno;
        }
        res.json(resposta);
    });
    ProdutoModel.getTodosMatricula(function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
        }else{
            resposta.dados = retorno;
        }
        res.json(resposta);
    });
});

router.get("/:class_id?", function(req, res, next){

    ProdutoModel.getClass_id(req.params.title ,function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
        }else{
            resposta.dados = retorno;           
        }
        res.json(resposta);
    });
});


router.post("/?", function(req, res, next){

    ProdutoModel.adicionar(req.body, function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro:', erro);
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = 'cadastro realizado com sucesso.';
            }else{
                resposta.erro = true;
                resposta.msg = 'Não foi possível realizar a operação.';
            }
        } 
        res.json(resposta);
    })
})

router.delete("/:class_id", function(req, res, next){

    ProdutoModel.deletar(req.params.class_id, function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = 'Registro excluído com sucesso.';
            }else{
                resposta.erro = true;
                resposta.msg = 'Não foi possível excluir o resgistro.';
            }
        }
        res.json(resposta);
    })
})

router.put("/", function(req, res, next){

    ProdutoModel.editar(req.body, function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = 'Registro editado com sucesso.';
            }else{
                resposta.erro = true;
                resposta.msg = 'Não foi possível editar o resgistro.';
            }
        }
        res.json(resposta);
    })
})



module.exports = router;