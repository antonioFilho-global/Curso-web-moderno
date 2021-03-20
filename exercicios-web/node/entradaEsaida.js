const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo) {
    //Escrevendo na saída padrão
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    //Recebendo dados da entrada padrão
    //no evento on data
    process.stdin.on('data', data => {
        //Como o usuário apertou enter, isso ficou salvo como um espaço na string,
        //assim necessitando retirar esse espaço da string, com o .replace
        const nome = data.toString().replace('\ n', ' ')
        //const nome = data.toString()

        process.stdout.write(`Fala ${nome}!! \n`)
        process.exit()
    })
}