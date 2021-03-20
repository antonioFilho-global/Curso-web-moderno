//Promises é usado em operações assíncronas 
function falarDepoisDe(segundos, frase) {
    //parametro resolve, 
    //que será chamada quando a promesa for resolvida
    //parametro reject, 
    //será chamada quando a promesa não for realizada
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //realiza a promessa
            //só aceita 1 parametro,
            //se for necessário passar mais valores,
            //é possível via objeto
            resolve(frase)
            
            //reject(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    //.then pode seer usado várias vezes
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    //tratando o caso de erro
    .catch(e => console.log(e))