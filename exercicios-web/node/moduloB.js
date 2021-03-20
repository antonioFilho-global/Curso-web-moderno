//Não é visível fora do arquivo 
let a = 2

//Torna visível fora do arquivo 
module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}