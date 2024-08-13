const numeros = [5, 3, 6, 7, 18, 54, 32, 40]
const pares = numeros
   .filter(valor => valor % 2 === 0)
   .map(valor => valor * 2)
   .reduce((acumulador, valor) => acumulador + valor)
console.log(pares)

// [6, 18, 54, 32, 40] pares
// [12, 36, 108, 64, 80] dobro
// [300] soma