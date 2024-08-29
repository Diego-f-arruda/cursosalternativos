
function carregar(){
let msg = window.document.getElementById("msg");
let imagem = window.document.getElementById("imagem");
let data = new Date();
var hora = data.getHours();
 
msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 0 && hora < 12){
    imagem.src = `manha.jpg`
    document.body.style.background = `#e2cd9f`
}else if(hora >= 12 && hora < 18){
    imagem.src = `tarde.jpg`
    document.body.style.background = `#b9846f`
}else{
    imagem.src = `noite.jpg`
    document.body.style.background = `#515154`
}
}

