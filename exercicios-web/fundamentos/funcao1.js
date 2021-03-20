//Funcao sem retorno 
function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(10,30)
imprimirSoma(2)
    //js pega só o dois primeiros paramentros
imprimirSoma(2,2,102,102,10) 

// Função com Retorno
//"b = 0" por padrão b recebe 0, em caso que nao seja passado por parametro
function soma (a, b = 0){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())