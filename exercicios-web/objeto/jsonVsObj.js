const obj = { 
    a: 1, b: 2, c: 3, 
    soma() {
        return a + b + c
    }
} 

//JSON não passa funções e nao é exetutavel  
//Pegando um obj e transformando em JSON
console.log(JSON.stringify(obj))

//Pegando um JSON e transformando em obj
//console.log(JSON.parse("{a: 1, b: 2, c: 3}")) formato inválido 
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) //formato válido
console.log(JSON.parse('{"a": 1.8, "b": "string", "c": true, "d": {}, "e": []}')) 

