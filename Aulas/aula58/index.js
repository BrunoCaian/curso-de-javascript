// Função construtora -> objetos
// Função fábrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

const p1 = new Pessoa('Bruno', 'Caian')
const p2 = new Pessoa('Lucas', 'Sousa')
console.log(p1.nome)