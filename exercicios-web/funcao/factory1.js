//Factory é uma função que retorna um objeto 

const prod1 = {
    nome: 'sapato1',
    preco: 45
}

const prod2 = {
    nome: 'sapato2',
    preco: 50
}

//Factory simples 
function criarPessoa() {
    return {
        nome: 'Antonio',
        sobrenome: 'Alves Costa Filho'
    }
}

console.log(criarPessoa())