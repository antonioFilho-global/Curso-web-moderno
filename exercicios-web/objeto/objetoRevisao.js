// coleção dinâmica de pares chave/valor
const produto = new Object 
produto.nome = 'Cadeira'
produto['Marca do Produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['Marca do Produto']

console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Antonio',
        endereco: {
            logradouro: 'Rua abc',
            numero: 445
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 21
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        // ....
    }
}


carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) // Da undefined

// Da erro por ta tendando calculador o tamanho de um atributo que foi deletado
// console.log(carro.condutores.length) 

