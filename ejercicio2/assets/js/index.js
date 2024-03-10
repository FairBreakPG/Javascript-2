let resultado = document.getElementById("resultado");
let boton = document.getElementById("boton");


function sumaFunc(){
    sticker1 = parseFloat(document.getElementById("sticker1").value);
    sticker2 = parseFloat(document.getElementById("sticker2").value);
    sticker3 = parseFloat(document.getElementById("sticker3").value);
    //operacion
    total = sticker1 + sticker2 + sticker3;
    

    if(!isNaN(total) && total <= 10){
        resultado.innerHTML = "llevas " + total + " stickers";
    }
    else{
        resultado.innerHTML = "llevas demasiados stickers";
    }
};