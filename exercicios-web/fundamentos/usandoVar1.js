//Caracteristicas do escopo do JS
{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
}
teste()
//console.log(local) //Da erro pelo fato de ser 
                     //um acesso a uma variável local 
                     //fora do seu escopo.


