const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos)

// ou também assim 
//const todos = filhas.concat(filhos, 'Fulano')

console.log(todos,  filhas,  filhos)

//Uni os array, porém se tiver uma matriz se tonarar elemento do array concatenado 
console.log(['a', 'b'].concat([1,2], [3,4], 5, [[6,7], [8,9]] ))
