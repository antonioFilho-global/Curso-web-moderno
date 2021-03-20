const sequencia = {
    _valor: 1, //convenção, indica para os demais progamadores que é uma variável privada 
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor      
        }     
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000 
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900  //É ignorado pelo condicional dentro do set 
console.log(sequencia.valor, sequencia.valor)