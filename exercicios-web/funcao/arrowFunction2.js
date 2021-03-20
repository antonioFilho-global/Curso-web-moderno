function Pessoa() {
    this.idade = 0
    //Arrow Function 
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa()