//Revisando as diferenças de escopo de variáveis 
// let e const

{
    var a = 2
    let b = 3

    console.log(b) //Aqui não da erro de escopo
}
console.log(a) //a foi declarado com tipo var, tendo escopo global
//console.log(b) //b foi declarado com tipo let, tendo escopo de bloco, assim dando um erro

// Template String 
const produto = 'iPad'
console.log(`${produto} é caro!`)

//Desctructuring 
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1,2,3]
console.log(x,y)

const { idade: i, nome } = {nome: 'Antonio', idade: 22} 
console.log(i, nome)