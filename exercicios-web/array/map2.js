const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços 

//Converte texto(json) para objeto 
const paraObjeto = json => JSON.parse(json)
//pegar o preço
const apenasPreco = produto => produto.preco

let resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)