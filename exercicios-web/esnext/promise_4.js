function gerarNumerosEntre(min, max, tempo) {
    //validando entrada do usuário
    if(min > max) {
        //Aqui inverte os valores para ficar 
        //em ordem crescente
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(function() {
            //gerando número aleoatório
            const fator = max - min + 1
            const aletorio = parseInt(Math.random() * fator) + min
            resolve(aletorio)
        }, tempo)
    })
}

//Promise.all
//Com objetivo de chamar várias vezes a promise
function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 50, 4000),
        gerarNumerosEntre(1, 50, 1000),
        gerarNumerosEntre(1, 50, 500),
        gerarNumerosEntre(1, 50, 3000),
        gerarNumerosEntre(1, 50, 100),
        gerarNumerosEntre(1, 50, 1500),
    ])
}

//Mostrando o tempo de execução
console.time('promise')

//Depois de todos os numeros forem gerados, o .then é realizado
gerarVariosNumeros()
    .then(console.log)
    //Mostrando o tempo de execução
    .then(() => {
        console.timeEnd('promise')
    })