/*const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 15, 20, 35]


const maiorQueDez = numeros.filter(valor => valor > 10)
console.log(maiorQueDez)
*/

const pessoas = [
    {nome: 'Bruno', idade: 18},
    {nome: 'Maria', idade: 36},
    {nome: 'Pedro', idade: 25},
    {nome: 'Roberta', idade: 30},
    {nome: 'José', idade: 55},
    {nome: 'Valdete', idade: 52},
]

const cincoOuMais = pessoas.filter(obj => obj.nome.length >= 5)
console.log(cincoOuMais)

const maisDeCinquenta = pessoas.filter(obj => obj.idade > 50)
console.log(maisDeCinquenta)

const terminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('b'))
console.log(terminaComA)
