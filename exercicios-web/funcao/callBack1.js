
const fabricantes = ["Mercedes", "Audi", "BMW"]

function espaco() {
    console.log("########################################################")
}

function imprimir( nome, indice) {
    console.log(`${indice + 1}.  (${nome})` )
}

//Para cada elemento do Array será chamado de volta a função imprimir 
fabricantes.forEach(imprimir)

espaco()

fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})

espaco()

//Arrow function 
fabricantes.forEach(fabricante => console.log(fabricante))