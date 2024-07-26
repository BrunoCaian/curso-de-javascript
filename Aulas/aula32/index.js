/*const numeros = [1000, 2000, 3000, 40000, 500, 6000, 70, 800, 9000];
const [um, , , quatro, , seis] = numeros;
console.log(um, quatro, seis)
*/
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

[a, b, c] = [b, c, a];
console.log(a, b, c)