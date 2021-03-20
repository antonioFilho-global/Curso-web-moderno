//Promise significa promessa, algo que pode acontecer no futuro

//foi criada uma promesa de existência de uma varável 
//que pode vim atraves de um acesso de um arquivo 
//ou endereço http ou função

const primeiroElemento = arryOuString => arryOuString[0]
// const primeiroElemento = (arry) => arry[0]
// const primeiraLetra = (string) => string[0]
const letraMinuscula = letra => letra.toLowerCase() //.toLowerCase letra minúscula

//resolver é cumprir promessa
new Promise(function(resolver) {
    //O valor prometido vem dessa função 
    resolver(['Ana', 'Maria', 'Antonio'])
}) 
    .then(primeiroElemento)
    .then(primeiroElemento)
    //.then(primeiraLetra)
    .then(letraMinuscula) 
    .then(console.log)