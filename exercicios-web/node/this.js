//Propriedades e características do this em js

console.log(this === global) //Fora de uma função não aponta para global
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função....')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) //Dentro de uma função aponta para global

    this.perigo = '....'  //Dessa forma vai para global
}

this.perigo = '....'  //Já aqui não, pq ta fora de uma função

//O this dentro de uma função não aponta para exports,
//embora fora de uma, aponta para exports
logThis()