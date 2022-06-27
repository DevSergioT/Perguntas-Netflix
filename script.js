

function mostrar(id,idbotao){

    var botao = document.getElementById(idbotao)
    
    if(document.getElementById(id).style.display == "block"){
        document.getElementById(id).style.display ="none"
        botao.classList.add("icon")
        botao.classList.remove("icon-giro")

    }
    else{
        document.getElementById(id).style.display ="block"
        botao.classList.add("icon-giro")
        botao.classList.remove("icon")
    }
} 



