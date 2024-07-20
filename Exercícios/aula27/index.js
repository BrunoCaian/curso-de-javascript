// ? :
const pontUsu = 1000
const nivelUsu = pontUsu >= 1000 ? 'Usuário VIP' : 'Usuário normal'

const corUsu = null
const corPadrao = corUsu || 'Preta'

console.log(nivelUsu, corPadrao)
