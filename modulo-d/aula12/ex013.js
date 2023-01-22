var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = quarta
    4 = quinta
    5 = sexta
    6 = Sábado
*/

// console.log(diaSem)
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}