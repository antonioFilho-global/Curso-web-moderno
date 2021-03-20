//Função arrow é uma função anônima
//Em funções Arrow o this é fixo 

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

//versão bem reduzida  
dobro = a => 2 * a //return implicito 
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

//versão bem reduzida 
ola = () => 'Olá'
ola = _ => 'Olá'  //possui um parametro "_"

console.log(ola())