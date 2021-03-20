function tratarErroElancar(erro){
    //Formas de tartar o Erro detectado pelo catch
    throw new Error('Foi detectado um Erro')
    //throw 10 
    //throw true 
    //throw 'Mensagem de Erro'

    //É possivel tratar o erro atraves da geração de um objeto 
    //throw {
    //    nome: erro.nome,
    //    msg:  erro.message,
    //    date: new Date
    //}
}

function imprimirNomeGritando(obj) {
    //try pode ser traduzido  como tentar. Usado para pedasos de códigos
    //que é possivel ter falhas. Maneiras de tratar erros  
    try{
        console.log(obj.name.toUpperCase() + '!!!!!')
    } catch (e){
        //O bloco cath é so exec. se tiver erro no try.
        tratarErroElancar(e)
    }  finally {
        //finally é sempre executado, indemendente de ter erro ou não.
        console.log('Final')
    }

}

//O erro ta Aqui!!. O certo é { name: } 
const obj = { nome: 'antonio'}
imprimirNomeGritando(obj)