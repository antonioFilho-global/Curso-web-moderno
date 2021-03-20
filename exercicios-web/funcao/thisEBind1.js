const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //Conflito entre paradigmas: funcional e OO

//bind consegue retorna o valor corretamente de funções que tem this 
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()