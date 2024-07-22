function getDiaSemanaTxt(diaSemana) {
    let diaSemanaTxt

    switch (diaSemana) {
        case 0:
            diaSemanaTxt = 'Domingo'
            return diaSemanaTxt
        case 1:
            diaSemanaTxt = 'Segunda'
            return diaSemanaTxt    
        case 2:
            diaSemanaTxt = 'Terça'
            return diaSemanaTxt  
        case 3:
            diaSemanaTxt = 'Quarta'
            return diaSemanaTxt   
        case 4:
            diaSemanaTxt = 'Quinta'
            return diaSemanaTxt 
        case 5:
            diaSemanaTxt = 'Sexta'
            return diaSemanaTxt    
        case 6:
            diaSemanaTxt = 'Sábado'
            return diaSemanaTxt
        default:
            diaSemanaTxt = ''  
            return diaSemanaTxt  
    } 
}

const data = new Date('1990-05-25')
let diaSemana = data.getDay()
const diaSemanaTxt = getDiaSemanaTxt(diaSemana)
          
/*if (diaSemana === 0) {
    diaSemanaTxt = 'Domingo'
} else if (diaSemana === 1) {
    diaSemanaTxt = 'Segunda'
} else if (diaSemana === 2) {
    diaSemanaTxt = 'Terça'
} else if (diaSemana === 3) {
    diaSemanaTxt = 'Quarta'
} else if (diaSemana === 4) {
    diaSemanaTxt = 'Quinta'
} else if (diaSemana === 5) {
    diaSemanaTxt = 'Sexta'
} else if (diaSemana === 6){
    diaSemanaTxt = 'Sábado'
} else {
    diaSemanaTxt = ''
}
*/
console.log(diaSemana, diaSemanaTxt)