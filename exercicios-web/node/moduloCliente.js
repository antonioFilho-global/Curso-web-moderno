const moduloA = require('./moduloA') 
const moduloB = require('./moduloB') 

//Versão ES6
//import moduloA from './moduloA'
//import moduloB from './moduloB'

//Chamadas de conteúdos do moduloA
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

//Chamadas de conteúdos do moduloB
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)