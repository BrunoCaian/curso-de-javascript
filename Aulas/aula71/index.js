// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    this.estoque = estoque

    Object.defineProperty(this, 'estoque', {
      enumerable: true, // mostra a chave
      value: estoque,// valor
      writable: true, // pode alterar
      configurable: false // configurável  
    })
}
const p1 = new Produto('Camisa', 20, 5)
delete p1.estoque
console.log(p1)