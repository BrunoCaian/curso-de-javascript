// return
// Retorna o valor
// Termina a função

/*function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}
const fala = falaFrase('Olá')
const resto = fala('mundo!')
console.log(resto)
*/

function criaMultiplicador(multi) {
    return function(n) {
        return n * multi
    }
}
const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)


console.log(duplica(10))