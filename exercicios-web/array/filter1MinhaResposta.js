const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'IPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

const caros = (produtos.filter(function(p) {
    return p.preco > 500 
}))

const frageis = (produtos.filter(function(p) {
    return p.fragil == true
}))

const carosEfrageis = (produtos.filter(function(p) {
    return p.preco > 500 && p.fragil == true
}))


console.log(caros, frageis, carosEfrageis)

