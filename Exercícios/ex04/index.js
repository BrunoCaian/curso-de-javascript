// Função de fibonacci
function fibonacci(n) {
    let anterior = 0
    let proxima = 1
    let soma = 1

    for (let i = 0; i <= n; i++ ) {
        console.log(anterior)
        soma = proxima + anterior
        anterior = proxima
        proxima = soma
    }
}
fibonacci(10)