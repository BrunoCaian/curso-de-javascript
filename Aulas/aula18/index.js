/*const pessoa1 = {
    nome: 'Bruno',
    sobrenome: 'Caian',
    idade: 18
}

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
*/

function criaPessoa (nome, sobrenome, idade
) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa1 = criaPessoa('Bruno', 'Caian', 18)
const pessoa2 = criaPessoa('Cauê', 'Fabiano', 8)
const pessoa3 = criaPessoa('Pedro', 'Sousa', 23)
console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)