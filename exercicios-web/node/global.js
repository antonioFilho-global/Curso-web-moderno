//console.log(global)

//Não é muito aconselhável ficar mudando código global do node 
//Com tudo, tem exceções que é necessário 
global.MinhaApp = Object.freeze( {
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})