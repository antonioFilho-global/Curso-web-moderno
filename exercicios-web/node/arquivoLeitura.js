//usando modulo interno do node
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono... 
//Não é recomendado, por travar o fluxo de execução
//Sendo usado somente para leitura de arquivos pequenos  
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//outra forma de ler o arquivo JSON, sem precisar converter
const config = require('./arquivo.json')
console.log(config.db)

//Ler uma pasta
//"__dirname" = diretório atual 
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})