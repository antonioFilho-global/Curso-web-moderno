//Sem promise, o codigo fica confuso
//Obter via JSON, os nomes dos alunos de 3 turmas diferentes
const http = require('http')

//recebendo a letra da turma e uma callback
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            //convertendo o JSON vindo da url
           callback(JSON.parse(resultado))
        })
    })
}

//foi usando let, para 
//ser sobrescrito valores nessa variável
let nomes = []
getTurma('A', alunos => {
    //Mostrando os alunos da turma A
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        //Mostrando os alunos da turma B
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            //Mostrando os alunos da turma C
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})