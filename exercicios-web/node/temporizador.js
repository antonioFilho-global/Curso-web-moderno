const schedule = require('node-schedule')

//Os dias da semana segue a sequência
//0 = domingo
//1 = segunda
//.....etc. 

// '*/5' = de 5 em 5 segundos
const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 1', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})  

//Cancelando o temporarizador 
setTimeout(function () {
    tarefa1.cancel()
    console.log('Tarefa cancelada 1!')
//O tempo de 20 segundo para cancelar a tarefa  
}, 20000)  

//Existem outras funções de temporizadores
//setInmediate
//setInterval
//Porém, a biblioteca 'node-schedule' tem mais possibilidades


//Criando as regras instanciado um objeto
const regra = new schedule.RecurrenceRule()
//De segunda a sexta
regra.dayOfWeek = [new schedule.Range(1, 5)]
//horário
regra.hour = 22
//aos 30 segundos
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
}) 