const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))    //Pega os nomes indentificadores dos atributos 
console.log(Object.values(pessoa))  //Pega  só os valores 
console.log(Object.entries(pessoa)) //Retorna o objeto composto por arreys chave valor  

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

console.log('##########################################################################')
//usando destructuring 
Object.entries(pessoa).forEach(( [chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//Definir propriedades de um atributo em um objeto 
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,  //Permite ser listada 
    writable: false,  //não é permitido ser modificada 
    value: '25/05/2020'
})

pessoa.dataNascimento = '01/01/2020' //Não modifica a data, por ter sido usado writable: false 
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))
console.log(Object.entries(pessoa))

// Object.assign (ECMAScript 2015)
// serve para unir atributos de outros objetos para um objeto de destino
//obs: em caso de atributos repetidos, acontecerá a sobre escritura do antigo
//exemplo o atributo a: 1 do objeto dest que foi sobre escrito pela união do objeto o2: 4  
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(dest)

Object.freeze(obj) //o objeto obj não é mais passível de modificação, pelo uso do freeze
obj.c = 12345
console.log(obj)