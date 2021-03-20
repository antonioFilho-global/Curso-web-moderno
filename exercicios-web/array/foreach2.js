//Minha versão do desafio 
console.log('Minha versão do desafio ')
function forEach2() {
    for (var i = 0; i < aprovados1.length; i++) {
        console.log(`${i + 1}) ${aprovados1[i]}`)
    }
}

const aprovados1 = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

console.log(forEach2(aprovados1))


//Versão do professor do desafio 
console.log('Versão do professor do desafio')

Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados2 = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados2.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})