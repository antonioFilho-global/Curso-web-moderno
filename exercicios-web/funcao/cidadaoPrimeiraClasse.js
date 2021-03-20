//cidadaoPrimeiraClasse


//Criar de forma literal 
function fun1() {

}

// Armazenar em uma variável 
const fun2 = function () {

}

// Armazenar em um Array
const array = [function (a,b) { return a + b}, fun1, fun2]
console.log(array[0](2,3))

//Armazenar em um atributo de Objeto
const obj = {}
obj.falar = function () {
    return 'Armazenando em um atributo de Objeto'
}
console.log(obj.falar())

// Passar função como parametro 
function run(fun) {
    fun()
}

run(function () { console.log('Executando....') })


// Uma função pode retornar/conter outra função 
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(5)
//Outra forma de chamar as funções 
const parametros = soma(2, 3)
parametros(5)