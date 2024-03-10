function verificarPass(){
    var selector1 = parseInt(document.getElementById("selector1").value);
    var selector2 = parseInt(document.getElementById("selector2").value);
    var selector3 = parseInt(document.getElementById("selector3").value);

    if (selector1 === 9 && selector2 === 1 && selector3 === 1) {
        document.getElementById("resultado").innerText = "Password 1 correcto";
    } else if (selector1 === 7 && selector2 === 1 && selector3 === 4) {
        document.getElementById("resultado").innerText = "Password 2 correcto";
    } else {
        document.getElementById("resultado").innerText = "Password incorrecto";
    }

}