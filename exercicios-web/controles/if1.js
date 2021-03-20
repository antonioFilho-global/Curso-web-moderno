function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log('Apovado Com:' + nota)
        return true
    }
}

soBoaNoticia(8.3)
soBoaNoticia(5.3)

//O js vai pegar o conteúdo de valor e converterá para boolean 
//e se fô verdadeiro caia no if 
function seForVerdadeiroEuFalo(valor) {
    if(valor) {
        console.log('É verdadeiro...' + valor)
    }
}

seForVerdadeiroEuFalo('Teste')
seForVerdadeiroEuFalo('')
seForVerdadeiroEuFalo()
seForVerdadeiroEuFalo(undefined)
seForVerdadeiroEuFalo(NaN)
seForVerdadeiroEuFalo(0)
seForVerdadeiroEuFalo(-1)
seForVerdadeiroEuFalo(' ')
seForVerdadeiroEuFalo('?')
seForVerdadeiroEuFalo([])
seForVerdadeiroEuFalo([1, 2, 3])