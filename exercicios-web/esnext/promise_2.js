//Promise significa promessa, algo que pode acontecer no futuro

//setTimeout Agenda a execução depois de um tempo definido
//O código fica muito confuso quando temos muitas callcack internas 
// setTimeout(function(){
//     console.log('Executando callback....')
    
//     setTimeout(function(){
//         console.log('Executando callback....')

//         setTimeout(function(){
//             console.log('Executando callback....')
//         },2000)
//     }, 2000) 
// }, 2000)

//Resolvendo usando Promise
//melhor solução
function esperarPor( tempo = 2000) {
    return new Promise(function (resolve){
        setTimeout(function() {
            console.log('Executando Promise...')
            resolve('Vishhh')
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)