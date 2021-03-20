//Funciona com var, mesmo as variaveis
//tendo o mesmo nome, pórem uma local e outra global
var numero = 1
{
    var numero = 2
    console.log('Dentro =',numero)
}
console.log('fora =', numero)