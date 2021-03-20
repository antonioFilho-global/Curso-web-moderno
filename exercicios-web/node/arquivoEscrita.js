const fs = require('fs')
const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

//persiste em arquivo, convertendo para json 
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err=> {
    //tratando a possibilidade de erro
    //se a variável err for nula o 'ou' exibirar a mensagem 
    console.log(err || 'Arquivo Salvo!')
}) 