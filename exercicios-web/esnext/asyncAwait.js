function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//      .then(() => console.log('Executando Promise 1'))
//      .then(esperarPor)
//      .then(() => console.log('Executando Promise 2'))
//      .then(esperarPor)
//      .then(() => console.log('Executando Promise 3'))
//      .then(esperarPor)
//      .then(() => console.log('Executando Promise 4'))

function retornarValor() {
    return new Promise (resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

//Usando Async Await
//um código assíncrono, mas que se parace com síncrono  

async function retornarValorRapido() {
    return 20
}

async function executar() {
    //Sem o await, é mostrado na tela tudo de uma vez
    //Com o await, é mostrado assim que é processado
    
    //funciona como se fosse um código síncrono, mesmo nao sendo
    let valor = await retornarValor()
    //let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1} ...`)

    esperarPor(1500)
    console.log(`Async/Await ${valor + 2} ...`)

    esperarPor(1500)
    console.log(`Async/Await ${valor + 3} ...`)

    return valor + 3
}

async function executarDeVerade() {
    const valor = await executar()  //Dentro de uma função asyns, o valor pode ser acessado diretamente 
    console.log(valor)
}

executarDeVerade()

//para ter acesso ao valor do return da função executar, fora da parte assíncrona, 
//é necessário usar o .then 
executar().then(console.log)