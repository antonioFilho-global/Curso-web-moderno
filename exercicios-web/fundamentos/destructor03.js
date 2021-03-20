//Destructor Usado em funções 

function rand({ min = 0 , max = 1000 }) {
    const valor = Math.random() * (max - min) + min
     return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj))
console.log(rand({ min: 100 }))
//passando vazio 
//Gera randomicamente entre os valores setados na função rand
console.log(rand({}))
//Da erro. pq nao foi passado nenhum objeto 
console.log(rand( ))

