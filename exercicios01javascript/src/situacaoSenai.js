import leia from "readline-sync"

const CapaT = 10
const Val1 = 4
const Val2 = 2
var SensorCont = 0
var ValorTotal = 0
var ValorPerd = 0
var LinhaOnibus = true
var pag = 0
var mpag = 0
var npag = 0


console.log("-----------------------------------------------------------")
console.log("Tem " + SensorCont + " dos " + CapaT + "acentos utilizados.")
console.log(pag + "Pagantes")
console.log(mpag + "Meia Entrada")
console.log(npag + "Isentos")
console.log("-----------------------------------------------------------")


var form = new Intl.NumberFormat("pt-BR",{
    style:"currency",
    currency:"BRL" 
})

//Onibus va finalizar a linha?
while(LinhaOnibus){
    //SE <= CT
    var FinalLinha = leia.question("Vai Finalizar a Linha? s/n ")
    if(FinalLinha === "s"){
        LinhaOnibus = false
    }else if(FinalLinha !== "s" && FinalLinha !== "n" ){
        console.log("Opcao Invalida...")
    }else{
        var Saiu = leia.question("Saiu quantos? Digite 0 para nenhum: ")
        switch(Saiu){
            case 1:
                SensorCont = SensorCont - 1
                break;
            case 2:
                SensorCont = SensorCont - 2
                break;
            case 3:
                SensorCont = SensorCont - 3
                break;
            case 4:
                SensorCont = SensorCont - 4
                break;
            case 5:
                SensorCont = SensorCont - 5
                break;
            case 6:
                SensorCont = SensorCont - 6
                break;
            case 7:
                SensorCont = SensorCont - 7
                break;
            case 8:
                SensorCont = SensorCont - 8
                break;
            case 9:
                SensorCont = SensorCont - 9
                break;
            case 10:
                SensorCont = SensorCont - 10
                break;
            default:
                console.log("-----------------------------------------------------------")
                console.log("Tem " + SensorCont + " dos " + CapaT + " acentos utilizados.")
                console.log(pag + "Pagantes")
                console.log(mpag + "Meia Entrada")
                console.log(npag + "Isentos")
                console.log("-----------------------------------------------------------")
                break;
            
        }


        if(SensorCont < CapaT){
       
            var EntrouPas = leia.question("Entrou Passageiro? s/n ")
            if(EntrouPas === "s"){
                var Pagante = leia.question("E pagante? s/n ")
                if(Pagante === "s"){
                    var meiaentrada = leia.question("Meia entrada? s/n ")
                    if(meiaentrada === "s"){
                        ValorTotal = ValorTotal + Val2
                        SensorCont = SensorCont + 1
                        mpag = mpag + 1
                        console.log("-----------------------------------------------------------")
                        console.log("Tem " + SensorCont + " dos " + CapaT + "acentos utilizados.")
                        console.log(pag + "Pagantes")
                        console.log(mpag + "Meia Entrada")
                        console.log(npag + "Isentos")
                        console.log("-----------------------------------------------------------")
                    }else if(meiaentrada !== "s" && meiaentrada !== "n"){
                        console.log("Opcao Invalida...")                    
                    }else{
                        ValorTotal = ValorTotal + Val1
                        SensorCont = SensorCont + 1
                        pag = pag + 1
                        console.log("-----------------------------------------------------------")
                        console.log("Tem " + SensorCont + " dos " + CapaT + "acentos utilizados.")
                        console.log(pag + "Pagantes")
                        console.log(mpag + "Meia Entrada")
                        console.log(npag + "Isentos")
                        console.log("-----------------------------------------------------------")                    
                    }
                }else if(Pagante !== "s" && Pagante !== "n"){
                        console.log("Opcao Invalida...")            
                }else{
                    SensorCont = SensorCont + 1
                    npag = npag + 1
                    console.log("-----------------------------------------------------------")
                    console.log("Tem " + SensorCont + " dos " + CapaT + "acentos utilizados.")
                    console.log(pag + "Pagantes")
                    console.log(mpag + "Meia Entrada")
                    console.log(npag + "Isentos")
                    console.log("-----------------------------------------------------------")            
                }
    
            }else if(EntrouPas !== "s" && EntrouPas !== "n"){
                console.log("Opcao Invalida...")
            }else{
                console.log("-----------------------------------------------------------")
                console.log("Tem " + SensorCont + " dos " + CapaT + "acentos utilizados.")
                console.log(pag + "Pagantes")
                console.log(mpag + "Meia Entrada")
                console.log(npag + "Isentos")
                console.log("-----------------------------------------------------------")
            }
                   
    
        }else{
            var PassageiroPerd = leia.question("Teve mais passageiro? ")
            if(PassageiroPerd === "s"){
                ValorPerd = ValorPerd + Val1
            }
        }
    }
}
ValorPerd = ValorPerd + (npag * Val1)
console.log("O Valor total Ganho foi de: " + form.format(ValorTotal))
console.log("O Valor Perdido em media foi de: " + form.format(ValorPerd))


/*
//Teste
var Testador = leia.question("Entrou passageiro? ")
if(Testador === "S"){
    ValorTotal = ValorTotal + Val1
    SensorCont++
}else if(Testador === "N"){
    SensorCont--
}else{  
    SensorCont = SensorCont + 50
    ValorTotal = Val1 * 50        
}

//Teste*/
