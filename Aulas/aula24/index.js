// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter varios else ifs na checagem
// só posso ter um else na checagem
// podemos uar condições sem else if, usando apenas if e else
const hora = 12

if (hora >= 5 && hora < 12) {
    console.log('bom dia')
}else if (hora >= 12 && hora < 18) {
    console.log('boa tarde')
}else if (hora >= 18 && hora <= 24) {
    console.log('boa noite')
}else {
    console.log('boa madrugada')
}