import ConfigClass from "../../ConfigClass";

const caminho = `${ConfigClass.getUrlApi().toString()}/produto`;

export default class ProdutoModelFront{
    constructor(){

    }
         static getTodos(){
           return fetch(caminho).then(response => {
                if(response.status >=400) {
                    throw new Error('erro server');
                }

                return response.json();

            })
         
    }
}