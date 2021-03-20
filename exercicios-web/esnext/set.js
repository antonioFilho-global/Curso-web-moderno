//Set não é indexado e nao aceita repetição 
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
//Não vai ocorrer a repetição do vasco 
times.add('Vasco')

console.log(times)
console.log(times.size) //mostra o tamanho
console.log(times.has('vasco')) //da falso por ta com a letra minúscula
console.log(times.has('Vasco')) //Verdadeiro
console.log(times.delete('Flamengo')) //deletando
console.log(times.has('Flamengo')) //verificando se existe

const nomes  = ['Raquel', 'Lucas', 'Júlia', 'Lucas']
//Uma forma rátida de remover elementos repetidos de um array
//usando Set
const nomeSet = new Set(nomes)
console.log(nomeSet)