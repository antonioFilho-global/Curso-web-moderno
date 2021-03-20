const aluno = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsista?

console.log(aluno.map(b => b.bolsista))

const resultado1 = aluno.map(b => b.bolsista).reduce(function(_acumulador, atual ) {
    //console.log(acumulador, atual)
    _acumulador = true 
    if (_acumulador == false) {
        return false
    }
    else { return true}
    
})

console.log(resultado1)

// Desafio 2: Algum aluno é bolsista?

const resultado2 = aluno.map(b => b.bolsista).reduce(function(atual) {
    //console.log(acumulador, atual)
    return atual == false
})

console.log(resultado2)
