// ======================================================
// CONFIGURACIÓN Y DATOS
// ======================================================

const NUMERO_WHATSAPP = "5491126682617";

const productos = [

    {
        id: 1,
        nombre: "Mate de vidrio forrado",
        categoria: "Bazar",
        precio: 5000,
        etiqueta: "NUEVO",
        imagen: "productos/mates-de-vidrio.jpeg",
        descripcion: "Mate de vidrio forrado, ideal para el uso diario."
    },
    {
        id: 2,
        nombre: "Balanza gramera",
        categoria: "Bazar",
        precio: 10000,
        etiqueta: "NUEVO",
        imagen: "productos/balanza-gramera.jpeg",
        descripcion: "Balanza para calcular los gramos de tus ingredientes favoritos."
    },
    {
        id: 3,
        nombre: "Batidor de café",
        categoria: "Bazar",
        precio: 3500,
        etiqueta: "NUEVO",
        imagen: "productos/batidor-de-cafe.jpeg",
        descripcion: "Ideal para espumar leche y café en segundos."
    },
    {
        id: 4,
        nombre: "Patillera Hytoshy",
        categoria: "Bazar",
        precio: 10000,
        etiqueta: "NUEVO",
        imagen: "productos/patillera.jpeg",
        descripcion: "Patillera profesional para cortes precisos."
    },
    {
        id: 5,
        nombre: "Piedra depiladora",
        categoria: "Bazar",
        precio: 4000,
        etiqueta: "NUEVO",
        imagen: "productos/piedra-depiladora.jpeg",
        descripcion: "Piedra depiladora de cristal para una exfoliación y depilación suave sin dolor."
    },
    {
        id: 6,
        nombre: "Termómetro digital",
        categoria: "Bazar",
        precio: 3000,
        etiqueta: "NUEVO",
        imagen: "productos/termometro-digital.jpeg",
        descripcion: "Termómetro digital de alta precisión de respuesta rápida para el hogar."
    },
    {
        id: 7,
        nombre: "USB ficha común",
        categoria: "Electrónica",
        precio: 3000,
        etiqueta: "MÁS VENDIDO",
        imagen: "productos/usb-ficha-comun.jpeg",
        descripcion: "Cable USB con conector estándar tipo Micro-USB para carga y transferencia de datos."
    },
    {
        id: 8,
        nombre: "USB ficha C",
        categoria: "Electrónica",
        precio: 4500,
        etiqueta: "MÁS VENDIDO",
        imagen: "productos/usb-ficha-C.jpeg",
        descripcion: "Cable USB Tipo-C de alta resistencia compatible con la mayoría de celulares modernos."
    },
    {
        id: 9,
        nombre: "Cargador rápido",
        categoria: "Electrónica",
        precio: 10000,
        etiqueta: "NUEVO",
        imagen: "productos/cargador-rapido.jpeg",
        descripcion: "Cargador carga rápida y protección contra sobrecalentamiento."
    },
    {
        id: 10,
        nombre: "Cabezal carga rápida USB C SAMSUNG",
        categoria: "Electrónica",
        precio: 10000,
        etiqueta: "NUEVO",
        imagen: "productos/cargador-carga-rapida-samsung.jpeg",
        descripcion: "Cargador marca Samsung garantiza una carga rápida y estable."
    },
    {
        id: 11,
        nombre: "Cargador Ditrón",
        categoria: "Electrónica",
        precio: 8000,
        etiqueta: "NUEVO",
        imagen: "productos/cargador-carga-rapida.jpeg",
        descripcion: "Cargador de carga rápida entregando energía de manera estable."
    },
    {
        id: 12,
        nombre: "Cargador 45W",
        categoria: "Electrónica",
        precio: 10000,
        etiqueta: "NUEVO",
        imagen: "productos/cargador-45w.jpeg",
        descripcion: "Cargador entrega 45W de manera ininterrumpida y sin sobrecalentamiento."
    },
    {
        id: 13,
        nombre: "Auricular bluetooth E10 MiPods",
        categoria: "Electrónica",
        precio: 15000,
        etiqueta: "NUEVO",
        imagen: "productos/auriculares-bluetoth.jpeg",
        descripcion: "Auriculares inalámbricos con excelente calidad de sonido y estuche de carga compacto."
    },
    {
        id: 14,
        nombre: "Auricular bluetooth M88 plus",
        categoria: "Electrónica",
        precio: 20000,
        etiqueta: "NUEVO",
        imagen: "productos/auri-bluetooth.jpeg",
        descripcion: "Auricular bluetooth M88 plus incluye cargador portátil con 3 fichas diferentes."
    },
    {
        id: 15,
        nombre: "Termo de acero inoxidable",
        categoria: "Bazar",
        precio: 20000,
        etiqueta: "NUEVO",
        imagen: "productos/termo-de-acero.jpeg",
        descripcion: "Termo de acero inoxidable de 500ML incluye 3 tazas."
    },
    {
        id: 16,
        nombre: "Soporte para TV de 85 pulgadas",
        categoria: "Bazar",
        precio: 25000,
        etiqueta: "NUEVO",
        imagen: "productos/soporte-tv.jpeg",
        descripcion: "Soporte reforzado para pantallas de gran tamaño de hasta 85 pulgadas."
    },
    {
        id: 17,
        nombre: "Soporte para TV de 42 pulgadas",
        categoria: "Bazar",
        precio: 15000,
        etiqueta: "NUEVO",
        imagen: "productos/soporte-tv-42.jpeg",
        descripcion: "Soporte de pared resistente compatible con TVs de hasta 42 pulgadas."
    },
    {
        id: 18,
        nombre: "Buclera y planchita 2 en 1",
        categoria: "Bazar",
        precio: 15000,
        etiqueta: "NUEVO",
        imagen: "productos/buclera.jpeg",
        descripcion: "Herramienta versátil para alisar o crear bucles definidos en minutos."
    },
    {
        id: 19,
        nombre: "Termo Stanley 1L",
        categoria: "Bazar",
        precio: 30000,
        etiqueta: "NUEVO",
        imagen: "productos/termo-stanley.jpeg",
        descripcion: "Termo resistente de 1 litro que conserva la temperatura por horas."
    },
    {
        id: 20,
        nombre: "Pava eléctrica 1.8L",
        categoria: "Bazar",
        precio: 15000,
        etiqueta: "NUEVO",
        imagen: "productos/pava.jpeg",
        descripcion: "Pava de corte automático ideal para preparar mates y infusiones rápidamente."
    },
    {
        id: 21,
        nombre: "Ventilador de pie",
        categoria: "Bazar",
        precio: 50000,
        etiqueta: "NUEVO",
        imagen: "productos/ventilador.jpeg",
        descripcion: "Ventilador de pie potente con altura regulable y oscilación."
    },
    {
        id: 22,
        nombre: "Cartel neón (abierto)",
        categoria: "Bazar",
        precio: 20000,
        etiqueta: "NUEVO",
        imagen: "productos/cartel-neon.jpeg",
        descripcion: "Cartel LED luminoso 'Abierto' ideal para llamar la atención en tu local comercial."
    },
    {
        id: 23,
        nombre: "Plancha para pelo",
        categoria: "Bazar",
        precio: 12000,
        etiqueta: "NUEVO",
        imagen: "productos/plancha-de-pelo.jpeg",
        descripcion: "Plancha para cabello de rápido calentamiento para un alisado perfecto."
    },
    {
        id: 24,
        nombre: "Secador de pelo",
        categoria: "Bazar",
        precio: 18000,
        etiqueta: "NUEVO",
        imagen: "productos/secador.jpeg",
        descripcion: "Secador compacto y potente con múltiples niveles de aire y temperatura."
    },
    {
        id: 25,
        nombre: "Foco bolichero",
        categoria: "Bazar",
        precio: 20000,
        etiqueta: "NUEVO",
        imagen: "productos/foco-bolichero.jpeg",
        descripcion: "Lámpara giratoria RGB con efectos de luces para ambientar fiestas."
    },
    {
        id: 26,
        nombre: "Auricular bluetooth p47",
        categoria: "Electrónica",
        precio: 8000,
        etiqueta: "NUEVO",
        imagen: "productos/auricular-p47.jpeg",
        descripcion: "Auriculares vincha plegables con Bluetooth, radio FM y entrada para tarjeta SD."
    },
    {
        id: 27,
        nombre: "Mini parlante bluetooth",
        categoria: "Electrónica",
        precio: 20000,
        etiqueta: "NUEVO",
        imagen: "productos/parlante.jpeg",
        descripcion: "Parlante portátil compacto con conexión inalámbrica y gran calidad de sonido."
    },
    {
        id: 28,
        nombre: "KIT de destornillador",
        categoria: "Bazar",
        precio: 10000,
        etiqueta: "NUEVO",
        imagen: "productos/kit-de-destornilladores.jpeg",
        descripcion: "Set de destornilladores de precisión ideal para reparaciones electrónicas y hogareñas."
    }
];


// ======================================================
// ESTADO GLOBAL
// ======================================================

let carrito = [];
let categoriaActual = "Todos";
let productoSeleccionado = null;

let talleSeleccionado = null;
let colorSeleccionado = null;

let cantidadSeleccionada = 1;


// ======================================================
// ELEMENTOS DOM
// ======================================================

const $ = (id) => document.getElementById(id);

const productosGrid = $("productosGrid");
const buscador = $("buscador");

const carritoPanel = $("carrito");
const overlay = $("overlay");

const itemsCarrito = $("itemsCarrito");
const carritoVacio = $("carritoVacio");

const cantidadCarrito = $("cantidadCarrito");
const totalCarrito = $("totalCarrito");

const modalProducto = $("modalProducto");
const detalleProducto = $("detalleProducto");

const modalCheckout = $("modalCheckout");

const toast = $("toast");


// ======================================================
// UTILIDADES
// ======================================================

function formatoPrecio(precio) {
    return precio.toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 0
    });
}


function mostrarToast(mensaje) {
    toast.textContent = mensaje;
    toast.classList.add("activo");

    setTimeout(() => {
        toast.classList.remove("activo");
    }, 2500);
}


// ======================================================
// IMÁGENES
// ======================================================

function generarImagenHTML(producto, id = "") {
    return `
        <img
            src="${producto.imagen}"
            alt="${producto.nombre}"
            ${id ? `id="${id}"` : ""}
        >
    `;
}


// ======================================================
// OPCIONES
// ======================================================

function generarOpcionesHTML(
    titulo,
    items,
    esColor = false
) {

    if (!items || items.length === 0) {
        return "";
    }


    const selectorId = esColor
        ? "selectorColores"
        : "selectorTalles";


    const botones = items.map(
        (item, index) => {

            const valor = esColor
                ? item.nombre
                : item;


            const accion = esColor
                ? `seleccionarColor(${index})`
                : `seleccionarTalle('${valor}')`;


            return `
                <button
                    type="button"
                    class="talle"
                    onclick="${accion}"
                >
                    ${valor}
                </button>
            `;

        }
    ).join("");


    return `
        <strong>
            ${titulo}
        </strong>

        <div
            class="selector-talles"
            id="${selectorId}"
        >
            ${botones}
        </div>
    `;
}


// ======================================================
// MOSTRAR PRODUCTOS
// ======================================================

function mostrarProductos() {

    productosGrid.innerHTML = "";

    const texto = buscador.value
        .toLowerCase()
        .trim();

    const filtrados = productos.filter(
        producto =>
            (
                categoriaActual === "Todos" ||
                producto.categoria === categoriaActual
            )
            &&
            (
                producto.nombre
                    .toLowerCase()
                    .includes(texto)
                ||
                producto.categoria
                    .toLowerCase()
                    .includes(texto)
            )
    );

    if (filtrados.length === 0) {
        productosGrid.innerHTML = `
            <div
                style="
                    grid-column: 1 / -1;
                    text-align: center;
                    padding: 50px;
                "
            >
                <h3>
                    No encontramos productos.
                </h3>
                <p>
                    Probá con otra búsqueda.
                </p>
            </div>
        `;
        return;
    }

    filtrados.forEach(
        (producto, indice) => {

            const tarjeta = document.createElement("article");
            tarjeta.className = "producto-card";

            tarjeta.setAttribute("data-aos", "fade-up");
            tarjeta.setAttribute("data-aos-delay", indice * 70);

            tarjeta.innerHTML = `
                <div class="producto-imagen">
                    ${generarImagenHTML(producto)}
                    ${
                        producto.etiqueta
                            ? `
                                <span class="etiqueta-producto">
                                    ${producto.etiqueta}
                                </span>
                            `
                            : ""
                    }
                </div>

                <div class="producto-info">
                    <p class="producto-categoria">
                        ${producto.categoria}
                    </p>
                    <h3>
                        ${producto.nombre}
                    </h3>
                    <p class="precio">
                        ${formatoPrecio(producto.precio)}
                    </p>
                    <button
                        type="button"
                        class="ver-producto"
                        onclick="abrirDetalle(${producto.id})"
                    >
                        VER PRODUCTO
                    </button>
                </div>
            `;

            productosGrid.appendChild(tarjeta);
        }
    );

    if (typeof AOS !== "undefined") {
        AOS.refresh();
    }
}


// ======================================================
// DETALLE DEL PRODUCTO
// ======================================================

function abrirDetalle(id) {

    const producto = productos.find(item => item.id === id);

    if (!producto) {
        return;
    }

    productoSeleccionado = producto;

    talleSeleccionado = null;
    colorSeleccionado = null;
    cantidadSeleccionada = 1;

    const opcionesHTML =
        generarOpcionesHTML(
            "Elegí una opción:",
            producto.talles
        )
        +
        generarOpcionesHTML(
            "Elegí tu color:",
            producto.colores,
            true
        );

    detalleProducto.innerHTML = `
        <div class="detalle-grid">
            <div class="detalle-imagen">
                ${generarImagenHTML(
                    producto,
                    "imagenDetalle"
                )}
            </div>

            <div class="detalle-info">
                <p class="producto-categoria">
                    ${producto.categoria}
                </p>
                <h2>
                    ${producto.nombre}
                </h2>
                <p class="detalle-precio">
                    ${formatoPrecio(producto.precio)}
                </p>
                <p>
                    ${producto.descripcion || ""}
                </p>

                <ul class="caracteristicas">
                    ${(producto.caracteristicas || [])
                        .map(caracteristica => `<li>${caracteristica}</li>`)
                        .join("")}
                </ul>

                ${opcionesHTML}

                <strong>
                    Cantidad:
                </strong>

                <div class="cantidad-selector">
                    <button
                        type="button"
                        onclick="cambiarCantidadDetalle(-1)"
                    >
                        −
                    </button>

                    <span id="cantidadDetalle">
                        1
                    </span>

                    <button
                        type="button"
                        onclick="cambiarCantidadDetalle(1)"
                    >
                        +
                    </button>
                </div>

                <button
                    type="button"
                    class="boton boton-completo"
                    onclick="agregarProductoDesdeDetalle()"
                >
                    AGREGAR AL CARRITO
                </button>
            </div>
        </div>
    `;

    modalProducto.classList.add("activo");
}


// ======================================================
// SELECTORES
// ======================================================

function marcarSeleccion(selector, condicion) {
    document
        .querySelectorAll(`${selector} .talle`)
        .forEach((btn, i) => {
            btn.classList.toggle(
                "seleccionado",
                condicion(btn, i)
            );
        });
}


function seleccionarTalle(talle) {
    talleSeleccionado = talle;

    marcarSeleccion(
        "#selectorTalles",
        btn => btn.textContent.trim() === talle
    );
}


function seleccionarColor(indice) {
    if (
        !productoSeleccionado ||
        !productoSeleccionado.colores[indice]
    ) {
        return;
    }

    const color = productoSeleccionado.colores[indice];
    colorSeleccionado = color.nombre;

    const imagen = $("imagenDetalle");

    if (imagen && color.imagen) {
        imagen.src = color.imagen;
    }

    marcarSeleccion(
        "#selectorColores",
        (_, i) => i === indice
    );
}


function cambiarCantidadDetalle(cambio) {
    if (!productoSeleccionado) {
        return;
    }

    cantidadSeleccionada += cambio;

    if (cantidadSeleccionada < 1) {
        cantidadSeleccionada = 1;
    }

    const elemento = $("cantidadDetalle");

    if (elemento) {
        elemento.textContent = cantidadSeleccionada;
    }
}


// ======================================================
// AGREGAR AL CARRITO
// ======================================================

function agregarProductoDesdeDetalle() {

    if (!productoSeleccionado) {
        return;
    }

    if (
        productoSeleccionado.talles?.length &&
        !talleSeleccionado
    ) {
        return mostrarToast("Primero elegí una opción");
    }

    if (
        productoSeleccionado.colores?.length &&
        !colorSeleccionado
    ) {
        return mostrarToast("Primero elegí un color");
    }

    const existente = carrito.find(item =>
        item.id === productoSeleccionado.id &&
        item.talle === talleSeleccionado &&
        item.color === colorSeleccionado
    );

    if (existente) {
        existente.cantidad += cantidadSeleccionada;
    } else {
        carrito.push({
            id: productoSeleccionado.id,
            nombre: productoSeleccionado.nombre,
            precio: productoSeleccionado.precio,
            talle: talleSeleccionado,
            color: colorSeleccionado,
            cantidad: cantidadSeleccionada
        });
    }

    actualizarCarrito();
    cerrarModalProducto();
    mostrarToast("Producto agregado al carrito");
}


// ======================================================
// CARRITO
// ======================================================

function actualizarCarrito() {

    itemsCarrito.innerHTML = "";

    let total = 0;
    let cantidadTotal = 0;

    carrito.forEach((item, indice) => {

        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        cantidadTotal += item.cantidad;

        const elemento = document.createElement("div");
        elemento.className = "item-carrito";

        elemento.innerHTML = `
            <h4>
                ${item.nombre}
            </h4>

            ${
                item.talle
                    ? `
                        <p class="detalle-talle">
                            Opción: ${item.talle}
                        </p>
                    `
                    : ""
            }

            ${
                item.color
                    ? `
                        <p class="detalle-talle">
                            Color: ${item.color}
                        </p>
                    `
                    : ""
            }

            <strong>
                ${formatoPrecio(item.precio)}
            </strong>

            <div class="controles">
                <button
                    type="button"
                    onclick="cambiarCantidadCarrito(${indice}, -1)"
                >
                    −
                </button>

                <span>
                    ${item.cantidad}
                </span>

                <button
                    type="button"
                    onclick="cambiarCantidadCarrito(${indice}, 1)"
                >
                    +
                </button>
            </div>

            <p class="item-precio">
                Subtotal:
                ${formatoPrecio(subtotal)}
            </p>

            <button
                type="button"
                class="eliminar"
                onclick="eliminarProducto(${indice})"
            >
                Eliminar
            </button>
        `;

        itemsCarrito.appendChild(elemento);
    });

    cantidadCarrito.textContent = cantidadTotal;
    totalCarrito.textContent = formatoPrecio(total);

    carritoVacio.style.display =
        carrito.length === 0 ? "flex" : "none";
}


function cambiarCantidadCarrito(indice, cambio) {
    if (!carrito[indice]) {
        return;
    }

    carrito[indice].cantidad += cambio;

    if (carrito[indice].cantidad <= 0) {
        carrito.splice(indice, 1);
    }

    actualizarCarrito();
}


function eliminarProducto(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
}


// ======================================================
// PANELES Y MODALES
// ======================================================

function abrirCarrito() {
    carritoPanel.classList.add("activo");
    overlay.classList.add("activo");
}

function cerrarCarrito() {
    carritoPanel.classList.remove("activo");
    overlay.classList.remove("activo");
}

function cerrarModalProducto() {
    modalProducto.classList.remove("activo");
}

function cerrarCheckout() {
    modalCheckout.classList.remove("activo");
}

function abrirCheckout() {
    if (carrito.length === 0) {
        return mostrarToast("El carrito está vacío");
    }

    cerrarCarrito();
    modalCheckout.classList.add("activo");
}


// ======================================================
// CHECKOUT
// ======================================================

function actualizarCheckout() {

    const entrega = document.querySelector('input[name="entrega"]:checked');
    const pago = document.querySelector('input[name="pago"]:checked');

    $("campoDireccion").style.display =
        entrega && entrega.value === "Envío"
            ? "block"
            : "none";

    $("notaPago").textContent =
        pago && pago.value === "Mercado Pago"
            ? "Te enviaremos por WhatsApp el link de pago de Mercado Pago."
            : "Pagás en efectivo al retirar o al recibir tu pedido.";
}


// ======================================================
// WHATSAPP
// ======================================================

function enviarPedidoWhatsApp() {

    if (carrito.length === 0) {
        return mostrarToast("El carrito está vacío");
    }

    const nombre = $("nombre").value.trim();
    const direccion = $("direccion").value.trim();
    const nota = $("nota").value.trim();

    const entrega = document.querySelector('input[name="entrega"]:checked');
    const pago = document.querySelector('input[name="pago"]:checked');

    if (!nombre) {
        return mostrarToast("Ingresá tu nombre");
    }

    if (!entrega) {
        return mostrarToast("Elegí retiro o envío");
    }

    if (entrega.value === "Envío" && !direccion) {
        return mostrarToast("Ingresá tu dirección");
    }

    if (!pago) {
        return mostrarToast("Elegí un método de pago");
    }

    let mensaje = `Hola, quiero realizar un pedido:%0A%0A`;
    mensaje += `Nombre: ${encodeURIComponent(nombre)}%0A`;

    mensaje += entrega.value === "Envío"
        ? `Entrega: Envío a ${encodeURIComponent(direccion)}%0A`
        : `Entrega: Retiro en local%0A`;

    mensaje += `Método de pago: ${encodeURIComponent(pago.value)}%0A%0A`;

    let total = 0;

    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;

        mensaje += `• ${encodeURIComponent(item.nombre)}`;

        if (item.talle) {
            mensaje += ` | ${encodeURIComponent(item.talle)}`;
        }

        if (item.color) {
            mensaje += ` | Color: ${encodeURIComponent(item.color)}`;
        }

        mensaje += ` | Cantidad: ${item.cantidad} | ${encodeURIComponent(formatoPrecio(subtotal))}%0A`;
    });

    mensaje += `%0ATotal: ${encodeURIComponent(formatoPrecio(total))}`;

    if (nota) {
        mensaje += `%0A%0ANota: ${encodeURIComponent(nota)}`;
    }

    window.open(
        `https://wa.me/${NUMERO_WHATSAPP}?text=${mensaje}`,
        "_blank"
    );

    carrito = [];
    actualizarCarrito();
    cerrarCheckout();

    mostrarToast("¡Pedido enviado! Te contactamos por WhatsApp");
}


// ======================================================
// EVENTOS
// ======================================================

$("abrirCarrito").addEventListener("click", abrirCarrito);
$("cerrarCarrito").addEventListener("click", cerrarCarrito);

overlay.addEventListener("click", cerrarCarrito);

$("verProductos").addEventListener("click", () => {
    $("productos").scrollIntoView({ behavior: "smooth" });
});

$("finalizarCompra").addEventListener("click", abrirCheckout);
$("cerrarProducto").addEventListener("click", cerrarModalProducto);
$("cerrarCheckout").addEventListener("click", cerrarCheckout);
$("enviarWhatsApp").addEventListener("click", enviarPedidoWhatsApp);
$("buscador").addEventListener("input", mostrarProductos);


// ======================================================
// RADIOS
// ======================================================

document
    .querySelectorAll('input[name="entrega"], input[name="pago"]')
    .forEach(radio => {
        radio.addEventListener("change", actualizarCheckout);
    });


// ======================================================
// CATEGORÍAS
// ======================================================

document
    .querySelectorAll(".categoria")
    .forEach(boton => {
        boton.addEventListener("click", () => {
            document
                .querySelectorAll(".categoria")
                .forEach(item => item.classList.remove("activa"));

            boton.classList.add("activa");
            categoriaActual = boton.dataset.categoria;
            mostrarProductos();
        });
    });


// ======================================================
// CERRAR MODALES AL HACER CLICK AFUERA
// ======================================================

[modalProducto, modalCheckout].forEach(modal => {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("activo");

            // VOLVER A MOSTRAR EL BOTÓN DE FACEBOOK
            const btnFb = document.querySelector(".facebook-flotante");
            if (btnFb) btnFb.style.display = "flex";
        }
    });
});


// ======================================================
// ESCAPE
// ======================================================

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        cerrarCarrito();
        cerrarModalProducto();
        cerrarCheckout();
    }
});


// ======================================================
// INICIALIZACIÓN
// ======================================================

mostrarProductos();
actualizarCarrito();
actualizarCheckout();


// ======================================================
// AOS
// ======================================================

AOS.init({
    duration: 700,
    easing: "ease-out",
    once: true
});

// ======================================================
// BOTÓN FLOTANTE FACEBOOK
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
    const botonFacebook = document.createElement("a");
    botonFacebook.href = "https://www.facebook.com/profile.php?id=61593440190893";
    botonFacebook.target = "_blank";
    botonFacebook.rel = "noopener noreferrer";
    botonFacebook.className = "facebook-flotante";

    botonFacebook.innerHTML = `
        <svg class="facebook-icono" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
        <span>FACEBOOK</span>
    `;

    document.body.appendChild(botonFacebook);
});