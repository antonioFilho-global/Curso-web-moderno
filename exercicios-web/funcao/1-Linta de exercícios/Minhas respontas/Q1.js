/*01) Crie uma função que dado dois valores (passados como parâmetros) 
mostre no console a soma, subtração,multiplicação e divisão desses valores.*/

function operaMatematicas(x, y) {
    return [x + y, x - y, x * y, x / y]
}

console.log(operaMatematicas(10,5))
