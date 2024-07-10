// Não podemos constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase. Ex: const nomeCompletoDoCliente 
// Case -sensitive
// Não pode modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE const;

/*const primeiroNumero = 5
const segundoNumero = 20
const resultado = primeiroNumero * segundoNumero
const resultadoTripli = resultado * 3
console.log(resultado)
console.log(resultadoTripli)
console.log( typeof primeiroNumero)
*/

const nome = 'Bruno'
const idade = 18
const cidade = 'Quixeré-CE'
const alturaEmM = 1.60
const facul = 'Unopar'
console.log(`${nome} tem ${idade} anos e mora em ${cidade}. Ele tem ${alturaEmM} de altura e faz faculdade na ${facul}.`)
