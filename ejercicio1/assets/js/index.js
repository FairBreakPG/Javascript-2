
function bordeDeImagen() {
    var imagen = document.querySelector('.imagen');
    if (imagen.classList.contains('borde-rojo')) {
        imagen.classList.remove('borde-rojo');
    } else {
        imagen.classList.add('borde-rojo');
    }
}