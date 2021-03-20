const nome = 'Antonio'
const concatenacao = 'Olá ' + nome + '!'

//console.log(concatenacao)

//Agora Usando template 

const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

//expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei.....${up('cuidado')}!`)
