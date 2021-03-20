// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
//Object.values retorna os valores do objeto
console.log(Object.values(obj))
//Object.values retorna as chaves do objeto
console.log(Object.keys(obj))
//Object.entries retorna as chaves 
//valores em forma de matriz
console.log(Object.entries(obj))

//Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome, //pega o valor de nome já denclaro anteriormente
    ola() {
        return 'Oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class
//foi adicionado com intuito de agradar 
//progamadores que ja usavam em outroas lingugens 
//Mas no fim das contas tudo é função
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())