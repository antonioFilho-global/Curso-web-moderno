function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + this.imposto)}`
}

const produto = {
    nome: 'Notbook',
    preco: 4589,
    desc: 0.15,
    imposto: 0.1,
    getPreco
}


global.preco = 20
global.desc = 0.1
global.imposto = 0.1

console.log(getPreco())
console.log(produto.getPreco())


//Usando call Apply
console.log('#########################################################')

const carro = {
    preco: 49990,
    desc: 0.2,
    imposto: 0
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//No metodo call é passado os parametros diretamente 
console.log(getPreco.call(carro, 0.17, '$', 0.1))

//No metodo apply é passado os parametros por meio de um array
console.log(getPreco.apply(global, [0.17, '$', 0.1]))
