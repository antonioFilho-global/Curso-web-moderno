//A comparação da verdadeira pela 
//caracteristica js ser fracamente tipada
//comparando o valor em se não o tipo de dado
console.log('01)', '1' == 1)
//Já com "===" da false. Por agora ser uma 
//comparação buscando o estritamente igual
//Indo para uma abordagem "mais forte mente tipada" 
//Da falso
console.log('02)', '2' === 2)
//Da Falso 
console.log('03)', '3' != 3)
//Da Verdadeiro
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

//Date(0) é uma data inicial padrão da linguagem 
const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime === d2.getTime)

console.log('12)', undefined == null)
console.log('13)', undefined === null)

