const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) //Não é dessa forma
console.log(tecnologias.get('react').framework)
console.log(tecnologias.get('angular').framework)


//O conjunto chave valor pode ser de diversas tipagens 
const chavesVariadas = new Map ([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach( (vl, ch) => {
    console.log(ch, vl)
})

//O .has verifica se existe o elemnto desejado
console.log(chavesVariadas.has(123))
//O .delete apaga o valor
console.log(chavesVariadas.delete(123))
console.log(chavesVariadas.has(123))
//O .size Retorna a quantidade de elementos 
console.log(chavesVariadas.size)

//Os valores são sobrescritos
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
//É aceito repetição de valores iguais, 
//mas nao de chaves iguais 
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)