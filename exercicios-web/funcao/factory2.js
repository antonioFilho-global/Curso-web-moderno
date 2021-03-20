//Factory é uma função que retorna um objeto 

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('garafa', 15))
console.log(criarProduto('notbook', 2500.50))
console.log(criarProduto('Smartphone', 1500.99))