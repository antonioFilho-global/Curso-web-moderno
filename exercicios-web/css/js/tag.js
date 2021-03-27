const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao 
    }


}


/* Varendo a página e selecionando a class .tag */
document.querySelectorAll('.tag').forEach(elemento => {
    /* salvando os elementos do forEach,
    e passando para minusculo*/
    const tagName = elemento.tagName.toLowerCase()

    /* Aplicando css para o elemento selecionado */
    elemento.style.borderColor = colors.get(tagName)

   /*  verifica se a class nolabel está contida no classList */
    if (!elemento.classList.contains('nolabel')) {
        /* criando a class label atravez do HTML */
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})