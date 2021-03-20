// Par Nome/Valor
const saudacao = 'Opa' //Contexto Léxico 1

function exec() {
    const saudacao = 'Falaa' //Contexto Léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Antonio',
    idade: 21,
    peso: 59,
    //Um objeto dentro do outro
    endereco:{
        logradouro: 'Vicente Alves Costa',
        numero: 445,
        bairro: 'centro',
        cidade: 'Várzea Alegre'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

