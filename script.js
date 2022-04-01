function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.querySelector("div#res")

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[EERO] Verifique os dados e tente novamente ")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano-Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id","foto")
        if (fsex[0].checked){
            genero = "Homem";
            if(idade >= 0 && idade <=10){
                //criança
                img.setAttribute("src","criancaH.png")
            }else if(idade > 10 && idade < 18) {
                //adolescente
                img.setAttribute("src","adolH.png")
            } else if (idade > 18 && idade < 26) {
                //jovem
                img.setAttribute("src","adolH.png")
            }else if (idade > 26 && idade < 50) {
                //adulto
                img.setAttribute("src","adultoH.png")
            }else{
                //idoso
                img.setAttribute("src","idoso.png")
            }
        }else{
            genero = "Mulher"
            if(idade >= 0 && idade <=10){
                //criança
                img.setAttribute("src","criancaM.png")
            }else if(idade > 10 && idade < 18) {
                //adolescente
                img.setAttribute("src","adolM.png")
            } else if (idade > 18 && idade < 26) {
                //jovem
                img.setAttribute("src","jovemM.png")
            }else if (idade > 26 && idade < 50) {
                //adulto
                img.setAttribute("src","adultoM.png")
            }else{
                //idoso
                img.setAttribute("src","idosa.png")
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML=(`Detectamos ${genero} com ${idade} anos <br/>`)
        res.appendChild(img)
    }

}
