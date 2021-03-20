const notas = [5.5, 7.8, 8.3, 8.2, 10]
//Lembrar de usar let, para manter 
//as variaveis dentro do escopo do for
for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Antonio',
    sobrenome: 'Alves Costa Filho',
    idade: 21,
    peso: 59
}

//Lembrar de usar let, para manter 
//as variaveis dentro do escopo do for
for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

