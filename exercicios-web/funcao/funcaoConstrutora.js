//Função construtora em js tem equivalência 
//com o conceito de classe do java 

function Carro(velocidadeMaxima = 200, delta = 5) {
    //Atributo privado
    let velocidadeAtual = 0 

    //Metodo público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

//Instanciando o carro uno
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

//Instanciando outro objeto(carro) ferrari
const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)
