for (let letra of "Antonio") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

//Dessa forma mostrarar os indices e nao os valores 
for (let i in assuntosEcma) {
    console.log(i)
}

//Usando o for of, é mostrado os valores em vez dos indices
for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map ([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

//formas de varrer a matriz assuntosMap

//mostra chave e valor 
for (let assunto of assuntosMap) {
    console.log(assunto)
}

//mostra só as chaves
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

//mostra só os valores
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

//mostrando usando Destructuring 
//e entries()
//a saída não é mais um array
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

//Pode ser usando em um Set
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}