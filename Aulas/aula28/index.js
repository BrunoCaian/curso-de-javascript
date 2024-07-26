// const data = new Date(2005, 9, 28, 18, 30, 20)
/* const data = new Date()
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth()+ 1)
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds()) 
console.log('Dia semana', data.getDay())
console.log(data.toString())
*/
function zeroLeft (num) {
    return num >= 10 ? num : `0${num}`
}
function formataData(data) {
  const dia = zeroLeft(data.getDate()) 
  const mes = zeroLeft(data.getMonth() + 1)
  const ano = zeroLeft(data.getFullYear())
  const hora =zeroLeft(data.getHours())
  const min = zeroLeft(data.getMinutes())
  const seg = zeroLeft(data.getSeconds())

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}` 
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)
