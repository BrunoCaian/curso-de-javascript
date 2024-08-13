const numeros = [5, 10, 20, 30, 40, 50]

const numerosDuplicados = numeros.map(valor => valor * 2)
console.log(numerosDuplicados)

const pessoas = [
    {nome: 'Bruno', idade: 18},
    {nome: 'Maria', idade: 36},
    {nome: 'Pedro', idade: 25},
    {nome: 'Roberta', idade: 30},
    {nome: 'José', idade: 55},
    {nome: 'Valdete', idade: 52},
]

const nomes = pessoas.map(obj => obj.nome)
console.log(nomes)

const idades = pessoas.map(obj => ({idade: obj.idade}))
console.log(idades)

const comIds = pessoas.map(function(obj, indice) {
    obj.id = indice + 1
    return obj
})
console.log(comIds)