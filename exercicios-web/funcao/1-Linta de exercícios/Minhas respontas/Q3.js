/*03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente. */

function expoente(base = 2 , expo = 2 ) {
    //return Math.pow(base,expo)
    return base**expo
} 

console.log(expoente())
console.log(expoente(10,3))