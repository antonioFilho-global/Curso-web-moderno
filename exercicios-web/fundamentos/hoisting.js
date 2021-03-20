//Mesmo a variavel a nao tendo sido criada durante a chamada
//na linha 3, nao da erro pq o js percebeu que a foi 
//criada na linha seguinte.
console.log('a =', a)
var a = 2
console.log('a =', a)

console.log('###############################################')
//funciona dentro de funções
function teste() {
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

teste()
console.log('a =', a)

console.log('###############################################')
console.log('Usando let da erro')
/*
console.log('b =', b)
let b = 2
console.log('b =', b)
*/