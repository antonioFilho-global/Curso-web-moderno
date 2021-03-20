//Não entendi bem o conceito 
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaUnica')
const contadorD = require('./instanciaUnica') 

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor,contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)