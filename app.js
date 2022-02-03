function ocultarsenha(){
    var senhabox = document.getElementById("senha")
    if (senhabox.type == "password") {
        senhabox.type = "text"
    } else {
        senhabox.type="password"
    }
}