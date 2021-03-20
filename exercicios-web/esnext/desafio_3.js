//Dados em um arquivo
const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    //.then(conteudo => console.log(conteudo))  //Mostra todo o arquivo
    .then(conteudo => conteudo.split('\n'))    //.split quebra em linhas
    //.then(linhas => console.log(linhas[2]))    //exibi linha específica 
    .then(linhas => linhas.join(','))     //Dividindo as linha por ,   
    .then(conteudo => `O valor final é: ${conteudo}`)   
    .then(console.log)