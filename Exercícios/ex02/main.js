function calculation() {
    let number1 = Number(document.querySelector('#number1').value)
    let number2 = Number(document.querySelector('#number2').value)
    let resultado = document.querySelector('#resultado')
    let selectOperation = document.querySelector('input[name="operation"]:checked').value
    let nameOperation,calculo;
    if (selectOperation == 'adicao') {
        nameOperation = 'adição'
        calculo = number1 + number2
        resultado.innerHTML = `A soma entre os números é igual a: ${calculo}`
        resultado.style.padding = '10px'
    } else if (selectOperation == 'subtracao') {
        nameOperation = 'subtração'
        calculo = number1 - number2
        resultado.innerHTML = `A subtração entre os números é igual a: ${calculo}`
    } else if (selectOperation == 'multiplicacao') {
        nameOperation = 'multiplicação'
        calculo = number1 * number2
        resultado.innerHTML = `A multiplicação entre os números é igual a: ${calculo}`
        document.querySelector
    } else {
        nameOperation = 'divisão'
        calculo = number1 / number2
        resultado.innerHTML = `A divisão entre os números é igual a: ${calculo}`
    }
    
}