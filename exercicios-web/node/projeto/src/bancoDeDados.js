const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
    //verifica se o produto tem uma id setado, se não cria um id para ele, usando a função "sequence.id"
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

//Função para retornar os id dos produtos
function  getProduto(id) {
    //retorna os id's ou 
    //se não econtrado retorna um objeto vazio
    return produtos[id] || {}
}

//Retorna todos os valores do objeto produtos
function getProdutos() {
    return Object.values(produtos)
}

//Exclui produtos
function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

//Tornando o conteudo desse arquivo visível vora dele
//ou seja mudando o escopo de atuação das funções usadas
//salvarProduto, getProduto, getProdutos.
//Obs: a função sequence, continuou com escopo restrito a esse arquivo bancoDeDados.js
module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }