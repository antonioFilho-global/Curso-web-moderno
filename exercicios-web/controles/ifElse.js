const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado: ' + nota)
    } else {
        console.log('Reprovado: ' + nota)
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Teste!') //Cuidado com valores não esperados!! 