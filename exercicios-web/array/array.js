console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //undefined 

//adicionando elementos 
aprovados[3] = 'Paulo'
aprovados.push('Antonio')

aprovados[9] = 'Rafael'
console.log(aprovados[8] === undefined)
console.log(aprovados.length)
console.log(aprovados)
aprovados.sort() //Autera o array em ordem alfabética
console.log(aprovados)

delete aprovados[1] //coloca undefined no indice 1
console.log(aprovados[1])
console.log(aprovados[2])

console.log('###########################################################')
aprovados = ['Bia', 'Carlos', 'Ana']

//splice adiconar e remover elementos em tederminado intervalo 
//apartir do indice 1 delete 1 elemento 
aprovados.splice(1,1)
//apartir do indice 1, não delete nada, mas adiconade 'Elemento1' 'Elemento2'
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)