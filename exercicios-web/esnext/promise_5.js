//
function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('Temp') //Provocando erro
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    }) 
}

funcionarOuNao('Testando...', 0.9)
    .then(v => `Valor: ${v}`)
    //tratando erro específico
    .then(
        v => console.log(v),
        err => console.log(`Erro Específico: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    //tratando o erro
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))

    //Uma boa prática é colocar o .catch por último 