/* =========================
   NEXA STORE — CARRITO
========================= */

let carrito = [];

const botonesComprar = document.querySelectorAll(".buy-button");
const contador = document.getElementById("cart-count");

botonesComprar.forEach((boton) => {

    boton.addEventListener("click", () => {

        const producto = boton.dataset.product;
        const precio = boton.dataset.price;

        carrito.push({
            producto: producto,
            precio: precio
        });

        contador.textContent = carrito.length;

        boton.textContent = "✓ AGREGADO";

        setTimeout(() => {
            boton.textContent = "COMPRAR";
        }, 1200);

    });

});


/* =========================
   CLIC EN CARRITO
========================= */

const cartButton = document.querySelector(".cart-button");

cartButton.addEventListener("click", (evento) => {

    evento.preventDefault();

    if (carrito.length === 0) {
        alert("🛒 Tu carrito está vacío.");
        return;
    }

    let pedido = "Hola NEXORA 👋\n\nQuiero comprar:\n\n";

    carrito.forEach((item, index) => {
        pedido += `${index + 1}. ${item.producto} — ${item.precio}\n`;
    });

    pedido += "\n¿Me pueden ayudar con el pedido?";

    const whatsapp =
        "https://wa.me/543813929798?text=" +
        encodeURIComponent(pedido);

    window.open(whatsapp, "_blank");

});


/* =========================
   ANIMACIONES
========================= */

const elementos = document.querySelectorAll(
    ".shop-card, .benefit, .product-card"
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


console.log("NEXA STORE — Demo creada por NEXORA 🚀");