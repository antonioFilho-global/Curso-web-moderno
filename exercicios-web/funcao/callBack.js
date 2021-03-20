
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir( nome, indice) {
    console.log(`${indice + 1}. ${nome}` )
}

//Para cada elemento do Array será chamado de volta a função imprimir 
fabricantes.forEach(imprimir)