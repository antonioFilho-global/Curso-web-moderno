//Usando promise, o codigo fica mais legivel
//Obter via JSON, os nomes dos alunos de 3 turmas diferentes
const { rejects } = require('assert')
const http = require('http')
const { resolve } = require('path')

//Usando Promises só é necessário um parametro
//letra, onde pode ser A, B ou C referente as turmas
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise ((resolve, rejects) =>{
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
            //tratand possíveis erros com try catch
               try {
                   //convertendo o JSON vindo da url
                   resolve(JSON.parse(resultado))
               } catch(e) {
                   rejects(e)
               }
            })
        })
    })
}

//Com callback em sequência o código fica confuso
// let nomes = []
// getTurma('A').then(alunos => {
//     //Mostrando os alunos da turma A
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         //Mostrando os alunos da turma B
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C').then(alunos => {
//             //Mostrando os alunos da turma C
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

//Dessa forma fica melhor
//pode ser passado várias promises de uma vez só
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    //composição de funções
    //recebendo as 3 turmas dentro de uma matriz
    //espalhando os array's na matriz
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    //tratando possível erro
    .catch(e => console.log(e.messange))

//Testando um cenário de erro que vai cair no catch reject
//Chamando uma turma que nao existe
//Da undefined
getTurma('D').catch(e => console.log(e.messange))