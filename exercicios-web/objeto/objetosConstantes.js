// Pessoa -> 123 -> {...}
//Nesse caso o que é constante é o endereço de memória e não o conteúdo do mesmo 
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// Pessoa <- 456 -> {...}
// Já aqui está tendando mudar o endereço de memoria que é uma constante 
// Dando ERRO
//pessoa = { nome: 'Ana' }

//Com o freeze os atributos de pessoa ficam impossibilitados de sofrer alteração 
//Sendo assim, as tentaivas de modificação posteriorres serão iguinoradas  
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome 

console.log(pessoa.nome)
console.log(pessoa)

//Criando o objeto já com o .freeze 
const pessoaConstante = Object.freeze( { nome: 'Antonio'} )
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)