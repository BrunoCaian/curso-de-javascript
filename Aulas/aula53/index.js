function retornaFuncao(nome) {
    return function() {
        return nome
    }
}

const funcao = retornaFuncao('Bruno')
const funcao2 = retornaFuncao('Caian')
console.dir(funcao)
console.dir(funcao2)