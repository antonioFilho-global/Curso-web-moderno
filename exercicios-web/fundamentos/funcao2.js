// Armazenado uma função em uma variavel

//função anônima (não tem nome)
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenado uma função em uma variavel
// Outra sintaxe usando "=>" no lugar de function
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Outra sintaxe usando retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))