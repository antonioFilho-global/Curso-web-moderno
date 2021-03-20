const escola = "Cod3r"

console.log(escola.charAt(4)) //Pegando a letra correspondente do índice
console.log(escola.charAt(5)) //Não gera um erro, quando o índice não existe, mas retorana vazio
console.log(escola.charCodeAt(3)) //Retorna o valor na tabela ASCII 
console.log(escola.indexOf('o'))  //Retorna o índice correspondente ao caractere 'o'

console.log(escola.substring(1)) //Exibe a string aparti do indice indicado 
console.log(escola.substring(0, 3)) //Exibe a string aparti do indice '0' até '3', porém não exibe o índice 3 

console.log('Escola'.concat(escola).concat("!")) //Concatenação 
console.log('Escola' + escola + "!") //Concatenação 
console.log(escola.replace(3, 'e')) // substitui o valor de um índece específico 
console.log(escola.replace(/\d/, 'e')) 
console.log(escola.replace(/\w/g, 'e'))  //Substitui tudo pela letra 'e'

console.log('Ana,Maria,Pedro'.split(',')) //Converter string em Arrey, usando o separador (',')  