//Para cada ' ../ ' é feito a saída da pasta atual, tomando como referência este arquivo 
const moduloA = require('../../moduloA')
console.log(moduloA.ola)
// Versão ES6
//import moduloA from '../../moduloA'; 

//Pegando pelo nome do modulo 
const saudacao = require('saudacao')
console.log(saudacao.ola)

//Impotando da pastaC
const c = require('./pastac/index')
//Ou Também assim
//const c = require('./pastac')
console.log(c.ola2)

/*
const http = require('htpp')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) 
*/