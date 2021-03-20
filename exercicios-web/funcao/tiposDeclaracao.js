//executa, mesmo a chamada 
//da função soma for antes 
//da declaração da função em questão.
//Isso ocorre pq o compilador carrega as funções 
//antes de executar as chamadas.
console.log(soma(3, 4))

//O mesmo não acontece com funções declaradas 
//como function declaration e function expression
//Da Erro
//console.log(sub(3, 4))
//Da Erro
//console.log(mult(5,5))

// function declaration 
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
//Menos usado 
const mult = function mult(x, y) {
    return x * y
}  


console.log(soma(2, 3))
console.log(sub(2, 3))
console.log(mult(2, 3))