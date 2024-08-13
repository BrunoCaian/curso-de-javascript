const numeros = [5, 3, 4, 7, 10, 50, 38, 40]
const total = numeros.reduce(function(acumulador, valor) {
    acumulador += valor
    return acumulador
})
console.log(total)

const pessoas = [
    {nome: 'Bruno', idade: 18},
    {nome: 'Maria', idade: 36},
    {nome: 'Pedro', idade: 25},
    {nome: 'Roberta', idade: 30},
    {nome: 'José', idade: 55},
    {nome: 'Valdete', idade: 52},
]
const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador
    return valor
})

console.log(maisVelha)