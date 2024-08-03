/*function funcao() {
    let total = 0
    for (argumento of arguments) {
        total += argumento
    }

    console.log(total)
}
funcao(1, 2, 3, 4, 5)
*/

/*function funcao({ nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}
funcao({nome: 'Bruno', sobrenome: 'Caian', idade: 18})
*/

/*function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}
funcao(['Bruno', 'Caian', 18])
*/

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
      if (operador === '+')  acumulador += numero
      if (operador === '-')  acumulador -= numero
      if (operador === '*')  acumulador *= numero
      if (operador === '/')  acumulador /= numero
    }
    console.log(acumulador)
}
conta('+', 0, 1, 20, 30, 40, 50)