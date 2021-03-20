console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//Adicionando um novo metodo no prototype
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Antonio ALves Costa Filho'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c','d','f'].first())

//tomar cuidado para não sobrescrever metodos padrões da linguagem
//Gerará confuções no entendimento do cod. e bug's 
//Evitar (Não usar)
String.prototype.toString = function () {
    return 'Lascou Tudo'
}

console.log('Antonio ALves Costa Filho'.reverse())