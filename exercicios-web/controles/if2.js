function teste1(num) {
    //Como no if não foi usado {} é so executado uma sentença de código no caso "console.log(num)"
    //as outras sentenças ficam fora do if independente da indentação 
    //Para evitar erros é melhor sempre usar as {}
    if(num > 7 )
        console.log(num)

    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7) ; { // Cuidado com o ';', não usar com as estruturas de controle  
        console.log(num)
    }
}

teste2(6)
teste2(8)