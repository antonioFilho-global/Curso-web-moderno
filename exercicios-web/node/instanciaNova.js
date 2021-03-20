//Não entendi bem o conceito 
// Uma factory retorna um novo objeto 
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}

//Nova Sintaxe ES6
//export default () => {
//    return {
//        valor: 1,
//        inc() {
//            this.valor++
//        }
//    }
//}