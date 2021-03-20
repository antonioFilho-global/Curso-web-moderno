const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] 
console.log(pilotos)

pilotos.pop() //O último elemento é removido 
console.log(pilotos)

pilotos.push('verstappen') //ADD um novo elemento na última possição
console.log(pilotos)

pilotos.shift() //O primeiro elemento é removido 
console.log(pilotos)

pilotos.unshift('Hamilton') //ADD um novo elemento na primeira possição
console.log(pilotos)

// splice pode adicionar e remover elementos 
pilotos.splice(2, 0, 'Bottas', 'Massa') 
console.log(pilotos)

//remover splice
pilotos.splice(3, 1) 
console.log(pilotos)

//Cria um novo array apartir de um indice
const algunsPilotos1 = pilotos.slice(2) 
console.log(algunsPilotos1)

//Cria um novo array apartir de um indice até outro,
//porém não inclue o indice de fim.
//Obs:Tipo teoria dos conjuntos,
///com indervado com bola nãao pintada  
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)