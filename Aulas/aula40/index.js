const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue continua para a próxima iteração
// Break sai do laço

for (let i in numeros) {
    let num = numeros[i]
    if (num === 2) {
        console.log('Pulei o 2')
        continue;
    }

    console.log(num)

    if (num === 7) {
        break
    }
}