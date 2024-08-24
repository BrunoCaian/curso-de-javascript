// Produto -> aumento, desconto
// Camisa = Cor, Copo = Material
function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
} 
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

function Camisa(nome, preco, cor) {
    Produto.call(this, nome, preco, cor)
    this.cor = cor
}

function Copo(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material
    this.estoque = estoque
}

Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function() {
        return estoque
    },
    set: function(valor) {
        if (typeof valor !== 'number') return
        estoque = valor
    }
})
Camisa.prototype = Object.create(Produto.prototype)
Camisa.prototype.constructor = Camisa
Copo.prototype = Object.create(Produto.prototype)
Copo.prototype.constructor = Copo

Camisa.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

Copo.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

const camisa = new Camisa('Regata', 19.90, 'Cinza')
const copo = new Copo('Copo personalizado', 4.50, 'Vidro', 10)
camisa.aumento(100)
copo.desconto(10)
console.log(camisa)
console.log(copo)
console.log(Produto)