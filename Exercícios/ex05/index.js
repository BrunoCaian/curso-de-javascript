function contaVogais() {
    let texto = 'Sem'
    texto = texto.toLowerCase()
    const vogais = texto.match(/[aeiou]/gi)
    const cont = vogais.length;
    console.log(cont)
}
contaVogais()