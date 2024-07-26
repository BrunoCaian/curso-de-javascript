 const h1 = document.querySelector('.container h1')
const data = new Date()
function zeroLeft (num) {
    return num >= 10 ? num : `0${num}`
}

function getDiaSemanaTxt(diaSemana) {
   const diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
   return diasSemana[diaSemana]
}

function getnameMonth(numberMonth) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return meses[numberMonth]
    
}

function criaData(data) {
    const diaSemana = data.getDay()
    const numberMonth = data.getMonth()
    const nameDay = getDiaSemanaTxt(diaSemana)
    const nameMonth = getnameMonth(numberMonth)
    return (
        `${nameDay}, ${data.getDate()} de ${nameMonth} de ${data.getFullYear()} ${zeroLeft(data.getHours())}:${zeroLeft(data.getMinutes())}`
    )
}

h1.innerHTML = criaData(data)
/*
const h1 = document.querySelector('.container h1')
const data = new Date()
h1.innerHTML = data.toLocaleDateString('pt-br', { dateStyle: 'full', timesStyle: 'full'})
*/
