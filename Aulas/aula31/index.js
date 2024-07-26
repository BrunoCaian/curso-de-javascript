const verdadeira = true

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função


let nome ='Bruno' // Criando
var nome2 = 'Bruno' // Criando

if (verdadeira) {
    let nome = 'Caian' // Criando
   //console.log(nome, nome2)

    if (verdadeira) {
        var nome2 = 'Caian' // Redeclarando
        let nome = 'Outra coisa'
        console.log(nome, nome2)
    }
}