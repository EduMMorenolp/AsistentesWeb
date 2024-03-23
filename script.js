console.log("Consola Asistentes Web")
console.log("Truquito Preciona : '↑', '→', '→', '↑', '←' ")

document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("nav a");

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {

            event.preventDefault();

            var targetId = link.getAttribute("href");

            var targetElement = document.querySelector(targetId);

            var offset = targetElement.offsetTop - 140;
            window.scrollTo({
                top: offset,
                behavior: "smooth"
            });

        });
    });

    var iconoMenu = document.querySelector('.menu-icon');
    var menu = document.querySelector('.menu');

    iconoMenu.addEventListener('click', function () {
        menu.classList.toggle('responsive');
    });
});
// MisterEgg
var secuenciaDeseada = ['ArrowUp', 'ArrowRight', 'ArrowRight', 'ArrowUp', 'ArrowLeft'];
var teclasPresionadas = [];
function verificarSecuencia() {
    if (teclasPresionadas.length === secuenciaDeseada.length) {
        if (teclasPresionadas.every((tecla, indice) => tecla === secuenciaDeseada[indice])) {
            window.location.href = 'https://github.com/EduMMorenolp';
        }
        teclasPresionadas = [];
    }
}
document.addEventListener('keydown', function (event) {
    teclasPresionadas.push(event.key);
    verificarSecuencia();
});