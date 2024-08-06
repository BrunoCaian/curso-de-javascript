// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {
    const sobrenome = 'Caian'
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Bruno'))
    }
    falaNome()
    console.log(idade, peso, altura)
})(18, 102, 1.60)

