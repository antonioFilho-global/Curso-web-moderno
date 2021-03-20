//Comportamento do this em funções 
let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

//Comportamento do this em Arrow function 
//Arrow func. não aponta para o escopo global 
let comparaComThisArrow =  param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

//Arrow func. é mais fote que o .bind 
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)