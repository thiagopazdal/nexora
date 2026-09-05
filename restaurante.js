/* =========================
   NOVA RESTÓ — INTERACCIONES
========================= */

// Animación al aparecer
const elementos = document.querySelectorAll(
    ".food-card, .review, .info-box, .gallery-item, .featured-content, .featured-visual"
);

const observador = new IntersectionObserver(
    (entradas) => {
        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
                observador.unobserve(entrada.target);
            }

        });
    },
    {
        threshold: 0.15
    }
);

elementos.forEach((elemento) => {
    elemento.classList.add("hidden");
    observador.observe(elemento);
});


// Efecto suave con el mouse
document.addEventListener("mousemove", (evento) => {

    const visual = document.querySelector(".restaurant-card");

    if (!visual) return;

    const x = (evento.clientX / window.innerWidth - 0.5) * 10;
    const y = (evento.clientY / window.innerHeight - 0.5) * 10;

    visual.style.transform =
        `rotate(-4deg) translate(${x}px, ${y}px)`;

});


// Mensaje en consola
console.log("NOVA RESTÓ — Demo creada por NEXORA");