function criaPessoa(nome, sobrenome, idade, a, p) {
    return {
        nome,
        sobrenome,
        idade,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(value) {
            value = value.split(' ')
            this.nome = value.shift()
            this.sobrenome = value.join(' ')
            console.log(value)
        },
        fala: function(assunto = 'Falando de tudo') {
            return `${this.nome} está ${assunto}.`
        },
        altura: a,
        peso: p,
        get imc() {
           const indice = this.peso/(this.altura**2)
           return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Bruno', 'Caian', 18, 1.60, 102)
p1.nomeCompleto = 'Bruno Caian Sombra Sousa'
console.log(p1.nomeCompleto)
console.log(p1.fala())