function somaEmedia () {
    let idade1 = Number(document.querySelector('#pessoa1').value)
    let idade2 = Number(document.querySelector('#pessoa2').value)
    let soma = idade1 + idade2
    let media = soma/2
    let resposta = document.getElementById('resposta')
    resposta.innerText = `A soma entre as idades é igual a ${soma}. Já a média é igual a ${media}`
}    