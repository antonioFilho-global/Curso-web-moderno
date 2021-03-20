const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//break, sai do bloco for ou while mais próximo 
for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log('############################################')
//continue, sai da repetição em questão,
//mas continue no bloco for ou while 
//Pulando um elemento 
for (y in nums) {
    if (y == 5) {
        console.log('*')
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

//Dessa forma é possivel controlar qual while ou for o
//comando break vai interagir  

//Cuidado com for dentro de for e break associados 
externo:
for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}

console.log('Fim!')