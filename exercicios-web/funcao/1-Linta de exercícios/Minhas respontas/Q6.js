/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples(capInicial, taxaJuros, tempo) {
    let juros = capInicial * taxaJuros * tempo
    let montante = capInicial + juros
    return montante
}

console.log(jurosSimples(100, 0.02, 2))


function jurosComposto(capInicial, taxaJuros, taxaJuros, tempo) {
    montante = capInicial * (1 + taxaJuros) ^ tempo 
    return montante
}

console.log(jurosComposto(100, 0.02, 2))
