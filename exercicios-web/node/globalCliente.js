require('./global')

console.log(MinhaApp.saudacao())

//Fica mudando o conteúdo global tão facilmente, não é desejado  
//Uma alternativa é o usar Object.freeze no arquivo global
MinhaApp.nome = 'Eita!'  //O freeze bloqueia a mudança 
console.log(MinhaApp.nome)