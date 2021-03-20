const aluno = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsista?

console.log(aluno.map(b => b.bolsista))

const bolsista = aluno => aluno.bolsista == true
const resultado = (aluno.reduce(bolsista))
console.log(resultado)


// Desafio 2: Algum aluno é bolsista?

const resultado2 = aluno.map(b => b.bolsista).reduce(function(atual) {
    if (atual == true) {
        return true
        //break
    } else { return true}
})

console.log(resultado2)
