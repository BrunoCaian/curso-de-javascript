// defineProperty - Getter e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    let estoquePrivado = estoque

    Object.defineProperty(this, 'estoque', {
      enumerable: true, // mostra a chave
      configurable: false, // configurável  
      get: function() {
        return estoquePrivado
      },
      set: function(valor) {
        if (typeof valor !== 'number') {
           throw new TypeError('msg')
        }
        estoquePrivado = valor
      }
    })
}    

function criaPessoa(nome) {
   return {
    get nome() {
        return nome
    },
    set nome(valor) {
        if (typeof valor !== 'string') {
            throw new TypeError('O valor dígitado não corresponde a uma string.')
        }
        nome = valor
    }
   }
}    
//const p1 = new Produto('Camisa', 20, 5)
//console.log(p1)
//p1.estoque = 'a'
//onsole.log(p1.estoque)
const p2 = criaPessoa('Bruno')
p2.nome = 'Paulo'
console.log(p2.nome)