//Operadores com 3 operando 
//Funciona como If else 
const resultado = nota => nota >= 7 ? 'Aprovado' : "Reprovado"

console.log(resultado(7.1))
console.log(resultado(6.999999))

//Outra sintaxe 
console.log('###############################################################################')
const resultado2 = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado2(5))
console.log(resultado2(8))
