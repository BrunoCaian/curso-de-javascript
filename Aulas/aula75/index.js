function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Blusa', 60)

const p2 = {
    nome: 'Jaqueta',
    preco: 79.99 
}

Object.setPrototypeOf(p2, Produto.prototype)

const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable:true,
        enumerable: true,
        value: 'Tênis Nike'
    },

    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 199.90
    },

    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43
    }
})
console.log(p3)
