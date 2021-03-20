// Novo recurso do ES2015

//Aqui é a sintaxe de objeto
const pessoa = {
    nome: 'Antonio Alves Costa Filho',
    idade: 21,
    endereco: {
        logradouro: 'Rua das fulanas',
        numero: 445
    }
}

//destructor
//Retire os atributos nome e idade 
//do objeto pessoa 
const { nome, idade } = pessoa 
console.log(nome, idade)

//Temos a opção de salvar o que foi 
//retirado(destructado) do objeto em variaveis, no caso n e i
const {nome: n, idade: i} = pessoa
console.log(n,i)

//Em caso de acesso de sobrenome que não é definodo no objeto 
//pessoa, terá como resultado undefined.
//Existe a possibilidade de setar um valor pre-definido em caso 
//de não correspondência no objeto.
const { sobrenome , estadoCivil = true} = pessoa
console.log(sobrenome, estadoCivil)

const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

//Não roda. pq nem conta é um atributo do objeto 
//pessoa, muito menos ag e num dentro de conta.
//const { conta: { ag , num} } = pessoa 