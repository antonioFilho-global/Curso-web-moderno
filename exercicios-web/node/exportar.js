console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
//export const b = 2
module.exports.c = 3
console.log(this)  //Dão o mesmo resultado 

exports = null
console.log(module.exports) //Dão o mesmo resultado 

exports = {      //continia tendo os valores de module.exports
    nome: 'Teste'
}

console.log(module.exports)

//A maniera correta e adicionar valores e objetos no module.exports
module.exports = {
    publico: true
}