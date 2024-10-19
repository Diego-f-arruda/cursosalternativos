

function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById(`txtano`);
    var res = document.querySelector(`div#res`);
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique os Dados e tente Novamente!!`);
    } else {
        var fsex = document.getElementsByName(`radsex`);
        var idade = ano - Number(fano.value);
        var genero = ``;
        var img = document.createElement("img");
        img.setAttribute("id", "foto");
        if (fsex[0].checked) {
            genero = `Homem`;
            if (idade >= 0 && idade < 6) {
                img.setAttribute("src", "imagens/Mbebe.png");
            } else if (idade >= 6 && idade < 17) {
                img.setAttribute("src", "imagens/Mcrianca.png");
            } else if (idade >= 17 && idade < 32) {
                img.setAttribute("src", "imagens/Jhomem.png");
            } else if (idade >= 32 && idade < 55) {
                img.setAttribute("src", "imagens/homem.png");
            } else {
                img.setAttribute("src", "imagens/idoso.png");
            }
        } else if (fsex[1].checked) {
            genero = `Mulher`;
            if (idade >= 0 && idade < 6) {
                img.setAttribute("src", "imagens/Fbebe.png");
            } else if (idade >= 6 && idade < 17) {
                img.setAttribute("src", "imagens/Fcrianca.png");
            } else if (idade >= 17 && idade < 32) {
                img.setAttribute("src", "imagens/Jmulher.png");
            } else if (idade >= 32 && idade < 55) {
                img.setAttribute("src", "imagens/mulher.png");
            } else {
                img.setAttribute("src", "imagens/idosa.png");
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}

function verificarPeloEnter(evento) {
    if (evento.key == "Enter") {
        verificar();
    }
}