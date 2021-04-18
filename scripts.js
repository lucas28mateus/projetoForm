function validate() {
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    var password = document.getElementById("password");

    if(name.value == "") {
        alert("Preencha o campo")
        name.focus()
        return;
    }
    if(email.value == "") {
        alert("E-mail não informado")
        email.focus()
        return;
    }
    if(password.value == "") {
        alert("senha não informada")
        return
    }
    alert("login feito!......")
}