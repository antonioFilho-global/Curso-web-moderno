//Operador ...rest(juntar)/spred(espalhar)
//usar rest com parâmetro de função

//usar spred com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
//O objeto clone pegarar todas as caracteristas do objeto funcionario
//espalhando com operador spread no objeto clone
const clone = { ativo: true, ...funcionario }
console.log(clone)

//Usar spread com  array
//O spred espalhou o array grupoA no conteúdo do array grupoFinal
const grupoA = ['Igna', 'Antonio']
const grupoFinal = ['Rafael',  ...grupoA, 'Rafaela']
console.log(grupoFinal)