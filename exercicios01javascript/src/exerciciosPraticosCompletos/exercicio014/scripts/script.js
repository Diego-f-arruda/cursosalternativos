
function carregar(){
let msg = window.document.getElementById("msg");
let imagem = window.document.getElementById("imagem");
let data = new Date();
var hora = data.getHours();
 
msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 0 && hora < 12){
    imagem.src = `imagens/manha.png`
    document.body.style.background = `#e2cd9f`
}else if(hora >= 12 && hora < 18){
    imagem.src = `imagens/tarde.png`
    document.body.style.background = `#b9846f`
}else{
    imagem.src = `imagens/noite.png`
    document.body.style.background = `#515154`
}
}

