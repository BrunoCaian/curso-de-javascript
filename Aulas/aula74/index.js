function Pessoa(nome, sobrenome, numero, cpf) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.numero = numero
    this.cpf = cpf
    //this.nomeCompleto = () => 'ORIGINAL >'+ this.nome + ' ' + this.sobrenome
}

Pessoa.prototype.Dados = function Dados() {
    return `Nome:${this.nome + ' ' + this.sobrenome}, Número: ${this.numero}, cpf: ${this.cpf}`
}

const pessoa1 = new Pessoa('Bruno', 'Caian', '885533904', '104.555.333-55')
const pessoa2 = new Pessoa('Maria', 'Valdete', '884399873', '223.667.555-33')
console.log(pessoa1.Dados())
console.log(pessoa2.Dados())