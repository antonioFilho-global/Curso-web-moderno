function gerarNumerosEntre(min, max, numerosProibidos) {
    //validando entrada do usuário
    if(min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        //gerando número aleoatório
        const fator = max - min + 1
        const aletorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aletorio)) {
            reject('Número Repetido')
        } else {
            resolve(aletorio)
        }      
    })
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    //Tratando erro
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push( await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros   
    } catch(e) {
        if (tentativas > 10) {
            throw "Não deu certo!"
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(25)
    .then(console.log)
    .catch(console.log)

gerarNumerosEntre(1, 5, [1, 2, 4])
     .then(console.log)
     .catch(console.log)