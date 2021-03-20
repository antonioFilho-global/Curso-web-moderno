let num1 = 1
let num2 = 2

//Pós-fixado 
num1++
console.log(num1)
//Pré-Fixada
//Tem maior precedência matemática 
--num1
console.log(num1)

//Da verdadeiro. Pq ++num1 é executado antes da comparação
//ficando num1 = 2  
//já o num2-- é executado depois da comparação  
//evitar o uso excessivo de operações de acrescimo e decrescimo. 
console.log(++num1 === num2--)
//Já agora da falso. Pq num-- já ter sido decrementado 
console.log(num1 === num2)
