function area (largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do Permitido: ${area} M^2.`)
    } else {
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,2,2,2)) 
console.log(area(5,5))