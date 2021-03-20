//Destructor aplicados em array's
function rand ([min = 0, max = 1000]) {
    //invertendo o max e min
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log( rand ([50, 40]))
//Passando só o valor mínimo
console.log(rand([992]))
//Passando só o valor máximo 
console.log(rand([ ,10]))
//Não passando nenhum valor (min/max)
//Ficando os valor setados na function
console.log(rand([]))
//Da erro. por ta tentando fazer destructor do vazio 
//console.log(rand())