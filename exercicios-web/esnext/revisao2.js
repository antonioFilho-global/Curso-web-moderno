//Arrow Function
//quanto a função tiver mais de 1 parametro é necessário
//colocalos entre parentes
const soma = (a, b) => a + b

//Usando com as {} é necessário colocar o retunr
const soma2 = (a, b) => {
   return a + b
}

console.log(soma(2, 3))
console.log(soma2(3, 3))

//Arrow Function (this)
//Aponta para module.exports ou só exports
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//Parametro default
//torna um valor padrão 
function log(texto = 'Node') {
    console.log(texto)
}

//mesmo vazio o resultado
//é o valor padrão definido anteriormente 
log()
//aqui o valor padrão é ignorado
log('Sou mais forte')
//Aqui também
log(null)

//Operador rest 
//afunção vai receber um conjunto de numeros
function total(...numeros) {
    let total = 0
    //Somando todos os numeros, usando forEach
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))
