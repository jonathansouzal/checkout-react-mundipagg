export default class ProdutoClass{
    constructor(id, idf3, nome, matricula, preco) {
        if(id!=null) this.id = id;
        this.idf3 = idf3;
        this.nome = nome;
        this.matricula = matricula;
        this.preco = preco;
    }
}