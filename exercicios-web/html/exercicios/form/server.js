const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp)=> {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Incluido!</h1>')
})

//Mostrando conforme o id 
app.post('/usuarios/:id', (req, resp)=> {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado!</h1>')
})

app.listen(5500)

//Procedimento para iniciar servidor,
//comando no terminal node server.js, 
//em seguida alt + l + o, que é o atalho da extenção live do Vscode