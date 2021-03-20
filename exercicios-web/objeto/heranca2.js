// Cadeia de protótipo (prototype chain)
Object.prototype.attr0 = '0' //Não faça isso em casa
const avo = {attr1: 'A'}
//usando __proto__ eu indico quem é o pai nessa relação de hernaça 
const pai = {__proto__: avo, attr2: 'B', attr3: '3'} 
const filho = {__proto__: pai, attr3: 'C'}
//vai ser procurado em toda cadeia de herança o atributo attr1, attr2, attr3
console.log(filho.attr1,filho.attr2,filho.attr3) 
//É encontrato valor que foi setado manualmente para o "Object.prototype.attr0"
console.log(filho.attr0) 

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.modelo}: ${this.velAtual} KM/H de ${this.velMax}KM/H`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing, atualiza os valores que foram setados no obj. carro 
}


const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //Chamando o método status()
    }
}

Object.setPrototypeOf(ferrari, carro) //Estabeleceu que ferrai tem carro como seu protótipo 
Object.setPrototypeOf(volvo, carro) //Volvo da mesma forma 

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
//ferrari.acelerarMais(300)
console.log(ferrari.status())
