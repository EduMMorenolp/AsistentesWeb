console.log("Consola Asistentes Web")
        console.log("Truquito Preciona : '↑', '→', '→', '↑', '←' ")
        // Navbar
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
                    window.location.href = 'https://github.com/EduMMorenolp/AsistentesWeb';
                }
                teclasPresionadas = [];
            }
        }
        document.addEventListener('keydown', function (event) {
            teclasPresionadas.push(event.key);
            verificarSecuencia();
        });

        // Array de nosotros
        var nosotros = [
            { img: "./public/imag/Nosotros/1.png", nombre: "Eduardo M Moreno", cargo: "Gestor de Proyectos", github: "https://github.com/EduMMorenolp", linkeding: "https://www.linkedin.com/in/eduardo-m-moreno-programador/" },
            { img: "./public/imag/Nosotros/2.png", nombre: "Vacio", cargo: "Diseñadora UX/UI", github: "", linkeding: "" },
            { img: "./public/imag/Nosotros/3.png", nombre: "Vacio", cargo: "Especialista en Marketing Digital", github: "", linkeding: "" },
            { img: "./public/imag/Nosotros/4.png", nombre: "Vacio", cargo: "Gestora de Proyectos", github: "", linkeding: "" }
        ];

        // Obtener el contenedor donde se agregarán las nosotros
        var contenedorNosotros = document.querySelector('.nosotros');

        // Recorrer el array de nosotros y agregarlas al HTML
        nosotros.forEach(function (persona) {
            var personaHTML = `
                <div class="persona">
                <img src="${persona.img}">
                <h3>${persona.nombre}</h3>
                <p>${persona.cargo}</p>
                <div class="redes">
                <a href="${persona.linkeding}" target="_blank" class="social-icon linkedin"><i
                    class="fab fa-linkedin"></i></a>
                <a href="${persona.github}" target="_blank" class="social-icon github"><i class="fab fa-github"></i></a>
                </div>
                </div>`;
            contenedorNosotros.innerHTML += personaHTML;
        });

        /* Efecto de escritura */
        const textos = [
            "Lorem ipsum dolor sit amet, consectetur adi Imagen creada con IA",
            "Integer ut turpis condimentum,Imagen creada con IA scelerisque risus sed, tempus tellus.",
            "Vestibulum vel risus nec elit consequat eleifend.Imagen creada con IA",
            "Sed et leo et Imagen creada con IA.Vestibulum vel risus nec elit consequat eleifend."
        ];
        const intervalo = 100; // milisegundos

        function escribirTexto(index, elementos) {
            if (index < textos[elementos].length) {
                document.getElementById(`texto-escrito-${elementos + 1}`).textContent += textos[elementos][index];
                setTimeout(() => escribirTexto(index + 1, elementos), intervalo);
            }
        }

        for (let i = 0; i < textos.length; i++) {
            escribirTexto(0, i);
        }

        const referencias = document.querySelector('.referencias');

        // function actualizarPosicion() {
        //     const elementos = referencias.children;
        //     const cantidadElementos = elementos.length;

        //     // Función para mostrar un elemento y ocultar los demás
        //     function mostrarElemento(index) {
        //         Array.from(elementos).forEach((elemento, i) => {
        //             if (i === index) {
        //                 elemento.style.transition = 'opacity 0.5s ease-in-out';
        //                 elemento.style.opacity = '1';
        //             } else {
        //                 elemento.style.transition = 'none';
        //                 elemento.style.opacity = '0';
        //             }
        //         });
        //     }

        //     let posicionActual = 0;

        //     // Mostrar los elementos uno por uno con un efecto de transición
        //     setInterval(() => {
        //         mostrarElemento(posicionActual);
        //         posicionActual = (posicionActual + 1) % cantidadElementos; // Reiniciar el índice cuando alcanza el último elemento
        //     }, 3000); // Cambiar el tiempo de espera según sea necesario
        // }

        // actualizarPosicion();