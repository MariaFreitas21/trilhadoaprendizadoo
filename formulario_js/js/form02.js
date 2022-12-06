function Enviar(){
    var nome= document.getElementById("nome")
    var email= document.getElementById("email")
    var ok

    if(nome.value!="" && nome.value.indexOf(" ")!=-1){
        if(email.value.indexOf("@")!=-1){
        
        alert(nome.value+"Agradecemos o seu contato")
        ok=true
        }
        else{
            alert("Digite um email válido")
            ok=false
        }
    }
    else{
        alert("Preenchaa o seu nome completo")
        ok=false
    }
    return ok
}