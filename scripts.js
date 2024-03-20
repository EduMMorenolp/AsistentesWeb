
console.log("Consola Asistentes Web")

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
});


document.addEventListener('DOMContentLoaded', function() {
    var iconoMenu = document.querySelector('.menu-icon');
    var menu = document.querySelector('.menu');

    iconoMenu.addEventListener('click', function() {
        menu.classList.toggle('responsive');
    });
});