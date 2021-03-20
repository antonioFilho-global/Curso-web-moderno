//b aramazena o endereço e a também
//atribuição por referência  

const a = {
    name: 'Teste'
}

const b = a
b.name = 'Opa'
console.log(b)
console.log(a)

//aqui não acontece, pelo fato de 
//a variavel ta armazenando o valor 
//primitivo e não o endereço
let c = 3
let d = c 

d++
console.log(d)
console.log(c)
