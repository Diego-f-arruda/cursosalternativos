var agora = new Date()
var diaSemana = agora.getDay()
var hora = agora.getHours()
var minutos = agora.getMinutes()

switch (diaSemana) {
    case 0:
        console.log(`Hoje é Domingo exatamente as ${hora}:${minutos}`)
        break;
    case 1:
        console.log(`Hoje é Segunda-Feira exatamente as ${hora}:${minutos}`)
        break;
    case 2:
        console.log(`Hoje é Terca- Feira exatamente as ${hora}:${minutos}`)
        break;
    case 3:
        console.log(`Hoje é Quarta-Feira exatamente as ${hora}:${minutos}`)
        break;
    case 4:
        console.log(`Hoje é Quinta-Feira exatamente as ${hora}:${minutos}`)
        break;
    case 5:
        console.log(`Hoje é Sexta-Feira exatamente as ${hora}:${minutos}`)
        break;
    case 6:
        console.log(`Hoje é Sabado exatamente as ${hora}:${minutos}`)
        break;
    default:
        console.log(`[ERRO] Dia Invalido`)
        break;
}
