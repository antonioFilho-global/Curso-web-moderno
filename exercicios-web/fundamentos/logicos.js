function compras(trabalho1, trabalho2){
    //Ou em js é || bem como |
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    
    // ^ é o simbolo para teste lógico XOR
    //!!() converte para boolean 
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise XOR

    //A melhor forma de fazer 
    //Sabendo que a tabela verdade do XOR (esclusivo)
    //só da verdadeiro se for diferente, tipo V F  F V 
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    //Criando um objeto que recebe as const da função compras
    return { 
        comprarSorvete,
        comprarTv50,
        comprarTv32,
        manterSaudavel
    }
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))