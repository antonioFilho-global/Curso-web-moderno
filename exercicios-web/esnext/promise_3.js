//Promise significa promessa, algo que pode acontecer no futuro

//obs:  let array = [1, 2, 3]
//const [x, y, z] = array  nesse caso os elemntos em seguências do array
//se tornaram os valores das variáveis
//x, y, z. Ficando x = 1, y = 2 e z =3 
//const [x,, y] = array o elemnto de possição ,, será ignorado
//x, y, z. Ficando x = 1, y = 3  

function gerarNumerosEntre(min, max) {
    //validando entrada do usuário
    if(min > max) {
        //Aqui inverte os valores para ficar 
        //em ordem crescente
        [max, min] = [min, max]
    }
    //outra sintaxe
    //if(min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        //gerando número aleoatório
        const fator = max - min + 1
        //tranformando em valor inteiro, mas funciona sem
        const aletorio = parseInt(Math.random() * fator) + min
        resolve(aletorio)
    })
}

//chamadas sucessivas 
gerarNumerosEntre(1, 10)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)