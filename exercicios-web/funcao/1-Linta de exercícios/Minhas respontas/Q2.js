/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

function existencia() {
    if ( (((this.l2 - this.l3) < this.l1) &&  (this.l1 <(this.l2 + this.l3)))  && (((this.l1 - this.l3) < this.l2) &&  (this.l2 <(this.l1 + this.l3))) && (((this.l1 - this.l2) < this.l3) &&  (this.l3 <(this.l1 + this.l2))) ) { 
        return true
    } else {
        return false
    }
}

const triangulo01 = {
    l1: 5,
    l2: 5,
    l3: 5,
    existencia
} 


if (triangulo01.existencia() == true) {
    console.log('O triângulo Existe')
    if ( (triangulo01.l1 == triangulo01.l2) && (triangulo01.l3 == triangulo01.l1) )  {
        console.log('O triângulo é Equilátero')
    } else if( (triangulo01.l1 != triangulo01.l2) && (triangulo01.l1 != triangulo01.l3) && (triangulo01.l2 != triangulo01.l3) ){
        console.log('O triângulo é Escaleno')
    } else {
        console.log('O triângulo é Isósceles')
    }
} else {
    console.log('O triângulo Não Existe')
}

     

//console.log(classificaTriangulo())//

