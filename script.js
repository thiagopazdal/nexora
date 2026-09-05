// =========================
// NEXORA - INTERACTIVIDAD
// =========================


// Efecto de aparición al hacer scroll

const elementos = document.querySelectorAll(
    ".card, .project, .price-card, .section h2, .section-label"
);

const observer = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


// Preparar elementos

elementos.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(40px)";
    elemento.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(elemento);

});


// =========================
// EFECTO DEL MOUSE
// =========================

document.addEventListener("mousemove", (evento) => {

    const x = evento.clientX;
    const y = evento.clientY;

    const glow = document.querySelector(".hero-glow");

    if (glow) {

        glow.style.transform =
            `translate(${x * 0.02}px, ${y * 0.02}px)`;

    }

});


// =========================
// MENSAJE EN CONSOLA
// =========================

console.log("NEXORA cargado correctamente 🚀");
console.log("Sistema interactivo activo.");

// =========================
// FORMULARIO → WHATSAPP
// =========================

const formulario = document.getElementById("contact-form");

if (formulario) {

    formulario.addEventListener("submit", function(evento) {

        evento.preventDefault();

        const nombre =
            document.getElementById("nombre").value;

        const negocio =
            document.getElementById("negocio").value;

        const tipo =
            document.getElementById("tipo").value;

        const presupuesto =
            document.getElementById("presupuesto").value;

        const mensaje =
            document.getElementById("mensaje").value;


        const texto =
            `Hola NEXORA 👋

Nombre: ${nombre}
Negocio: ${negocio}
Tipo de página: ${tipo}
Presupuesto: ${presupuesto}

Mi idea:
${mensaje}`;


        const whatsapp =
            "https://wa.me/543813929798?text=" +
            encodeURIComponent(texto);


        window.open(whatsapp, "_blank");

    });

}

// =========================
// MENÚ MÓVIL
// =========================

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("active");

        if (menu.classList.contains("active")) {

            menuToggle.textContent = "✕";

        } else {

            menuToggle.textContent = "☰";

        }

    });


    // Cerrar menú al tocar una opción

    const enlaces = menu.querySelectorAll("a");

    enlaces.forEach((enlace) => {

        enlace.addEventListener("click", () => {

            menu.classList.remove("active");

            menuToggle.textContent = "☰";

        });

    });

}