// Estrategia 1 para gerar valor padrão 
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c 
}
//Quando não é setado nenhum valor,  
//fica o valor padrão 1.
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) 
//Já quando é setado o valor 0 a lógica não funciona bem. 
//PQ 0 é dado como falso, caindo no || sendo alterado para 1 o valor  


//Estrategia 2, 3 e 4 para gerar valor padão 
function soma2(a, b, c) {
    //'!==' Estritamente diferente
    a = a !== undefined ? a : 1
    //Outra forma
    //arguments: É  tipo um array que contem os parametros da função
    //'b = 1', índice do array de parametros 
    b = 1 in arguments ? b : 1
    //Outra forma
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//Valor padrão do Es2015
//Forma mais atualizada de se fazer valor padrão 
//Bem mais fácil 

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c 
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))

