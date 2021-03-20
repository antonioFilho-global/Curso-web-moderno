//Vai pegar valores e colocalos no formato de dinheiro
function real(partes, ...valores) {
    const resultado = []
    //Varendo o array de valores
    valores.forEach((valor, indice) => {
        //Se nao for um valor numérico,
        //só retorne sem fazer mudanças

        //Caso seja, um valor númerico,faça a limitação de duas
        //casas decimais depois da vírgula
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)