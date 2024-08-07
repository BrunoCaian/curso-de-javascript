function criaHoraSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0
let timer;

function iniciaRelogio() {
   timer = setInterval(function() {
    segundos++;
    relogio.innerHTML = criaHoraSegundos(segundos)
   }, 1000)
}

iniciar.addEventListener('click', function(e) {
    relogio.classList.remove('pausado')
    iniciaRelogio()
})

pausar.addEventListener('click', function(e) {
    relogio.classList.add('pausado')
    clearInterval(timer)
})

zerar.addEventListener('click', function(e) {
    relogio.classList.remove('pausado')
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0
})
