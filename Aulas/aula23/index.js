/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> true "o valor mesmo"

FALSY
* false
0
'' "" ``
null / undefined
NaN
*/

const corUsuario = 'vermelho'
const corPadrao = corUsuario || 'preto'
console.log(corPadrao)
