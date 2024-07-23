const pessoa = {
    nome: 'Bruno',
    sobrenome: 'Caian',
    idade: 18,
    endereço: {
       rua: 'Vila Nova 1',
       numero: 254 
    }
}

const {endereço: {rua, numero}} = pessoa
console.log(rua, numero)