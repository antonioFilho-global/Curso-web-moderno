let valor //não inicializada 
console.log(valor)  //undefined foi declado mas não inicializado 

valor = null // ausência de valor 
console.log(valor)
//console.log(valor.toString()) //da Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.nome = 'Caneta'
produto.preco = 3.50

console.log(produto)

produto.preco = undefined // Evitar atribuir undefined 
console.log(!!produto.preco) //retorna falso 
//delete produto.preco 
console.log(produto)

produto.preco = null // Sem preço 
console.log(!!produto.preco) //false
console.log(produto)
