const valores = [7.7 , 8.9 , 6.3 , 9.2]
console.log(valores[0], valores [3])
console.log(valores[4]) //Elemento não existe da undefine

valores[5] = 10 //cria indices vazios
console.log(valores)
console.log(valores.length)

//push adiciona valores no array
valores.push({id: 4}, false, null, 'teste')
console.log(valores)

//pop retira o último elemnto do array
//delete elimina o elemnto especificado 
console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)