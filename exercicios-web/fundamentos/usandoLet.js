var numero = 1
{
    let numero = 2
    console.log('Dentro =', numero)
}
console.log('Fora =', numero)

console.log("#####################")

//Nesse caso é chamado no escopo interno
//a variável numero, como não existe a variável numero no
//escopo em questão, o js procura a variavel numero 
//no escopa externo 
var numero = 1
{
    let numero2 = 2
    console.log('Dentro =', numero)
}
console.log('Fora =', numero)