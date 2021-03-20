const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//Fazendo a conexão com arquivo de banco de dados
const bancoDeDados = require('./bancoDeDados')

//Usado para todas as requisições
app.use(bodyParser.urlencoded({ extended: true}))

//Mostrando que é possível executar mais de uma função Middleware, usando o next()
//app.get('/produtos', (req, res, next) => {
//    console.log('Middleware 1...')
//    next() 
//})

//função .send envia uma resposta para o cliente
//O .get, vai pegar todos os protudos do bancoDeDados 
app.get('/produtos', (req, res, next) => {
    //res.send({ nome: 'Notebook', preco: 4000.00}) // Converte para JSON
    res.send(bancoDeDados.getProdutos())
})

//O .get, vai pegar o protudo correspondente ao id no bancoDeDados 
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProdutos(req.params.id))
})

//Agora uma requisição post
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto( {
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

//Agora uma requisição put
//sendo usada para modificar produto 
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto( {
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

//Função para deletar produto
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

//Mostrando que o servidor ta executando e em qual porta 
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
}) 