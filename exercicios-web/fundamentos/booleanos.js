let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
//transformando number em booleano (!!)
//E Usando só um ! é a negação 
console.log(!!isAtivo)

console.log("Os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'Texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("Os falsos...")
console.log(!!0)
console.log(!!'') //string vazia 
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para Finalizar')
console.log(!!('' || null || 0 || '  ')) //Usando operador ou
console.log('' || null || 0 || 'Texto') //Usando operador ou

let nome01 = ''
console.log(nome01 || 'Desconhecido')

let nome02 = 'Antonio Filho'
console.log(nome02 || 'Desconhecido') //Retorna o primeiro verdadeiro 