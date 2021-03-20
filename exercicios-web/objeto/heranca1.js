const ferrari = {
    modelo: 'F40',
    velMax:  324
}

const volvo = {
    modelo: 'V40',
    velMax:  200
}

// .__proto__ procura o objeto pai 
console.log(ferrari.__proto__)
//Mostra que o objeto pai de ferrari é o Object.prototype
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) 

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)