//Object.preventExtensions : bloqueia a adição de novos atributos em objetos 

const produto = Object.preventExtensions ({
    nome: 'Biscoito Recheado', preco: 1.99, tag: 'promoção' 
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha' // A sobre escrita é liberada 
produto.descricao = 'Borracha escolar branca' //Não será adicionado o atributo 
delete produto.tag //O delete é liberado 
console.log(produto)


//Object.seal

const pessoa = { 
    nome: 'Juliana', idade: 35
}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' //Não será adicionado o atributo 
delete pessoa.nome //Não deleta 
pessoa.idade = 21 //Só funciona a sobre escrita 
console.log(pessoa)

//Object.freeze = selado + valores constantes
//Não da para fazer sobre escrita 