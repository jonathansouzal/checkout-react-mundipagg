import ProdutoModel from "../model/produtos/ProdutoModel";

let divProduto = window.document.getElementById("div-produto"); ///div-produto é um id
let objIndexController;

class IndexController{

    getTodosIndex(divProduto){
        let promise = new Promise(function(resolve, reject){
            let promiseFetch = ProdutoModel.getTodos();
            
            promiseFetch.then(response =>{
                resolve(response);
            });
        })

        promise.then(response =>{
            let champsfitness = "";

            for(const nome of response.champsfitness) {
                champsfitness += `<div class="card-header"> 
                 <h5 class="card-title">${nome}</h5>
                 </div>`;
            }

        })
    }
}

function main(){
    objIndexController = new IndexController();
    objIndexController.getTodosIndex(divProduto);
}

window.onload = main;