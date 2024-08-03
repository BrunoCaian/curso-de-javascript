falaOi()
function falaOi() {
    console.log('OI')
}

// First-class objects (Objetos de primera classe)
// Function expression
const souUmDado = function() {
    console.log('Sou um dado')
}
souUmDado()

// Arrow Function
const funcaoArrow = () => {
   console.log('Sou uma arrow function') 
}
funcaoArrow()

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando')
    }
}
obj.falar()