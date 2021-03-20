console.log(typeof console)
//Math.ceil arredonda o número para cima 
console.log(Math.ceil(6.1))

const obj1 = {}
//const obj2 = {}

//preferivel usar essa forma 
obj1.nome = 'Antonio'
//Outra forma de escrever 
//obj2['nome'] = 'Pedro'

console.log(obj1.nome)
//console.log(obj2.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Executavel')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()