//CONDIÇÃO SIMPLES

/*var vel = 60.5

console.log(`A velocidade do carro é ${vel} Km/h`)
if(vel > 60){
    console.log(`Voce ultrapassou a velocidade permitida, Multado`)
}else{
    console.log(`Dirija sempre usando o cinto de segurança`)
}
*/

//CONDIÇÃO COMPOSTA
/*
var pais = 'EUA'
console.log(`Vivendo em ${pais}`)
if(pais == 'BRASIL'){
    console.log(`Voce é Brasileiro!`)
}else{
    console.log(`Voce é Estrangeiro!`)
}
*/
/*var idade = 59
    console.log(`Voce tem ${idade} anos`)
if (idade < 16){
    console.log(`Nao pode votar`)
} else if (idade <= 18 || idade >= 60){
    console.log(`Voto Opcional`)
} else {
    console.log(`Vota Obrigatorio`)
}*/

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao ${hora} horas`)

if(hora < 12){
    console.log(`Tenha um bom dia`)
}else if(hora <= 18){
    console.log(`Tenha uma boa tarde`)
}else{
    console.log(`Tenha uma Otima noite`)
}