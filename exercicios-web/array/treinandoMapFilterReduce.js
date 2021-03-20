var convidados = [
    {nome: 'Felipe', idade: 37, genero: 'masculino'},
    {nome: 'Amanda', idade: 17, genero: 'feminino'},
    {nome: 'João',   idade: 27, genero: 'masculino'},
    {nome: 'Daniel', idade: 21, genero: 'masculino'},
    {nome: 'Helena', idade: 21, genero: 'feminino'},
    {nome: 'Mariana',idade: 16, genero: 'feminino'},
    {nome: 'Ana',    idade: 18, genero: 'feminino'}
];

// Filtrando menores de idade 
console.log('Só os Maiores de Idade:')
const maiorDeIdade = convidados => convidados.idade >= 18
const permitidos = convidados.filter(maiorDeIdade)
console.log(permitidos)
 
// Dividindo por gênero 
console.log('Dividindo por gênero:')
const masculino = convidados => convidados.genero == 'masculino'
const feminino = convidados => convidados.genero == 'feminino'
console.log(permitidos.filter(masculino))
console.log(permitidos.filter(feminino))


// Os menosres de idade barrados 
console.log('Os menores de idade Barrados:')
const menorDeIdade = convidados => convidados.idade < 18
const barrados = convidados.filter(menorDeIdade)
console.log(barrados)

