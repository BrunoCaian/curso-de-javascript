const form = document.getElementById('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const ipeso = e.target.querySelector('#peso')
    const ialtura = e.target.querySelector('#altura')
    const peso = Number(ipeso.value)
    const altura = Number(ialtura.value)
    
    if (!peso) {
        iresultado('Peso inválido', false)
        return
    }

    if (!altura) {
        iresultado('Altura inválida', false)
        return
    }

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)
    const msg = `Seu IMC é ${imc} (${nivelImc}.)`
    iresultado(msg, true)
    console.log(imc, nivelImc)

function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return nivel [5]
    if (imc >= 34.9) return nivel [4]
    if (imc >= 29.9) return nivel [3]
    if (imc >= 24.9) return nivel [2]
    if (imc >= 18.5) return nivel [1]
    if (imc < 18.5)  return nivel [0]
}

function criaP() {
    const p = document.createElement('p')
    return p
}

function iresultado(msg, isValid) {
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = ''
    const p = criaP()
    
    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg
    resultado.appendChild(p)
}})
