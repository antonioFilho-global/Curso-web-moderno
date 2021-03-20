function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) 
    //bind(this) faz com que seja apontado para this correto 
}

new Pessoa 


//Outra forma sem usar o .bind
//Criando uma constante que pega o valor do this no escopo fora do setInterval
//já dentro da função setInterval é usado a constante criada anteriormente(self),
//que contem o valor do this correto.
  

function Pessoa1() {
    this.idade = 0

    const self = this 
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000) 
}

new Pessoa1