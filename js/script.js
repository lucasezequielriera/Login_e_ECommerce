//============================================ HEADER LOGO'S NAME =============================================//

document.getElementById("nombreLogo").innerHTML = "Code It's Fun";

//=============================================================================================================//

//============================================== CREANDO USUARIO ==============================================//

// Creacion de usuario a partir de Arrays //
function usuario_nuevo() {
    // Identificando Array //
    let usuario = [];
    // Mediante prompt() agregamos datos de usuario_nuevo //
    let nombre_ = prompt("Ingrese un nombre");
    let apellido_ = prompt("Ingrese apellido");
    let usuario_ = prompt("Ingrese usuario");
    let contrasena_ = prompt("Ingrese contraseña");
    // Declarando "usuario_nuevo" para agregarlo a "usuario" //
    const usuario_nuevo = [nombre_, apellido_, usuario_, contrasena_];
    // Agregando array dentro de "usuario" //
    usuario.push(usuario_nuevo);

    for (let i = 0; i < usuario_nuevo.length; i++) {
        document.write(`-----------------------<br>${i}: ${usuario_nuevo[i]}<br>`);
    }
}

// Con push agrego los valores al array (agrego los productos al final) //
// Con unshift agrego los productos al principio //

//=============================================================================================================//

//============================================= CREANDO PRODUCTOS =============================================//

// // Object Constructor //
// function Curso(id, nombre, precio, profesor, stock) {
//     this.id = id;
//     this.nombre = nombre;
//     this.precio = precio;
//     this.profesor = profesor;
//     this.stock = stock;
// }


// // Instanciando las propiedades del objeto constructor (Productos) //
// // Object Literal (manera resumida) //
// const Curso1 = new Curso(1, "HTML", 6000, "Lucas Riera", 5);
// const Curso2 = new Curso(2, "CSS", 8000, "Ramon Diaz", 5);
// const Curso3 = new Curso(3, "JS", 3000, "Cristina Sanchez", 5);
// const Curso4 = new Curso(4, "ReactJS", 4000, "Julieta Diaz", 5);
// const Curso5 = new Curso(5, "PHP", 8000, "Cristina Perez", 5);
// const Curso6 = new Curso(6, "Python", 15000, "Leonardo Miguel", 5);
// const Curso7 = new Curso(7, "C++", 9000, "Iara Paez", 5);

// Mostrar Productos como JSON //
const Cursos = [{
        id: 1,
        nombre: 'HTML',
        precio: 5000,
        profesor: 'Lucas riera',
        stock: 4
    },
    {
        id: 2,
        nombre: 'CSS',
        precio: 5000,
        profesor: 'Lucas riera',
        stock: 4
    },
    {
        id: 3,
        nombre: 'JS',
        precio: 5000,
        profesor: 'Lucas riera',
        stock: 4
    },
    {
        id: 4,
        nombre: 'REACT',
        precio: 5000,
        profesor: 'Lucas riera',
        stock: 4
    },
    {
        id: 5,
        nombre: 'PHP',
        precio: 5000,
        profesor: 'Lucas riera',
        stock: 4
    },
    {
        id: 6,
        nombre: 'PYTHON',
        precio: 5000,
        profesor: 'Lucas riera',
        stock: 4
    },
    {
        id: 7,
        nombre: 'C++',
        precio: 5000,
        profesor: 'Lucas riera',
        stock: 4
    }
];

//=============================================================================================================//

//============================================== DECLARACIONES ================================================//

let carrito = [];
let total = 0;
const DOMproductos = document.querySelector(".productos");
const DOMcarrito = document.querySelector("#carrito");
const DOMprecio = document.querySelector("#precio");
const DOMbotonEliminar = document.querySelector("#boton-eliminar");

//========================================= MOSTRAR PRODUCTOS EN HTML =========================================// 
function mostrarProductos() {
    Cursos.forEach((value) => {
        // Contenedor //
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.width = "18rem";
        // Body //
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        // Title //
        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = value.nombre;
        // Badge //
        const badge = document.createElement("span");
        badge.classList.add("badge");
        badge.classList.add("bg-success");
        badge.style.fontSize = "8px";
        badge.textContent = "Nuevo";
        // Subtitle //
        const cardSubtitle = document.createElement("h6");
        cardSubtitle.classList.add("card-subtitle");
        cardSubtitle.classList.add("mb-2");
        cardSubtitle.classList.add("text-muted");
        cardSubtitle.textContent = "Curso Online";
        // Text //
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = "Curso impartido por CoderHouse para todos/as.";
        // Price //
        const price = document.createElement("p");
        price.classList.add("card-text");
        price.textContent = `$${value.precio}`;
        // Button //
        const buyButton = document.createElement("button");
        buyButton.classList.add("btn", "btn-success");
        buyButton.textContent = "Comprar Producto";
        buyButton.setAttribute("marcador", value.id);
        buyButton.addEventListener("click", productoAlCarrito);
        // Insertar y enlazar todo para mostrar en HTML //
        cardTitle.appendChild(badge);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardSubtitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(price);
        cardBody.appendChild(buyButton);
        card.appendChild(cardBody);
        DOMproductos.appendChild(card);
    });
}

//=============================================================================================================//

//============================================ COMPRAR PRODUCTOS ==============================================//

function productoAlCarrito(agregar) {
    // Añadir producto al carrito //
    carrito.push(agregar.target.getAttribute("marcador"));
    // Calcular total //
    calculoPrecioTotal();
    // Actualizar carrito de compras //
    mostrarCarrito();
}

//=============================================================================================================//

//===================================== CORRECCIÓN DE ERRORES EN CARRITO ======================================//

function mostrarCarrito() {
    // Vaciar HTML //
    DOMcarrito.textContent = "";
    // Sacar productos duplicados //
    const nuevoCarrito = [...new Set(carrito)];
    // Se genera el carrito sin duplicados al hacer un spread y utilizar "Set" para que cada objeto sea único //
    nuevoCarrito.forEach((value) => {
        // Filtramos en el constructor //
        const itemNecesario = Cursos.filter((itemDatos) => {
            // Caso de si se repite la "id" //
            return itemDatos.id === Number(value);
        });
        // Cuenta las veces que se repite el producto usando "reduce" //
        const numeroProductos = carrito.reduce((total, itemId) => {
            // Si las Id's coinciden entonces se incrementa el contador utilizando el operador ternario "?" //
            return itemId === value ? total += 1 : total;
        }, 0);
        // Mostrar productos en carrito con los productos seleccionados creando sus etiquetas //
        // tr //
        const $tr = document.createElement("tr");
        // td Nombre //
        const $tdNombre = document.createElement("td");
        $tdNombre.textContent = itemNecesario[0].nombre;
        // td Precio //
        const $tdPrecio = document.createElement("td");
        $tdPrecio.textContent = itemNecesario[0].precio;
        // td Profesor //
        const $tdProfesor = document.createElement("td");
        $tdProfesor.textContent = itemNecesario[0].profesor;
        // td Cantidad //
        const $tdCantidad = document.createElement("td");
        $tdCantidad.textContent = numeroProductos;
        // td Delete Button //
        const $tdDeleteButton = document.createElement("td");
        // Boton para borrar por producto //
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger");
        deleteButton.textContent = "Eliminar producto";
        deleteButton.dataset.item = value;
        deleteButton.addEventListener("click", borrarProducto);
        // Enlazar todos //
        $tdDeleteButton.appendChild(deleteButton);
        $tr.appendChild($tdNombre);
        $tr.appendChild($tdPrecio);
        $tr.appendChild($tdProfesor);
        $tr.appendChild($tdCantidad);
        $tr.appendChild($tdDeleteButton);
        DOMcarrito.appendChild($tr);
    });
}

//=============================================================================================================//

//======================================= BORRAR PRODUCTOS DEL CARRITO ========================================//

function borrarProducto(borrar) {
    // Obtenemos el "id" del "button" seleccionado del elemento //
    const idButton = borrar.target.dataset.item;
    // Se borran todos los productos //
    carrito = carrito.filter((id) => {
        return id !== idButton;
    });
    // Traemos nuevamente todos los productos //
    mostrarCarrito();
    // Se calcula el precio nuevamente sin el producto eliminado //
    calculoPrecioTotal();
}

//=============================================================================================================//

//============================ CALCULAMOS EL PRECIO SEGÚN LOS PRODUCTOS REPETIDOS =============================//

function calculoPrecioTotal() {
    // Inicializamos el precio //
    total = 0;
    carrito.forEach((value) => {
        // Obtenemos el precio de cada producto //
        const itemNecesario = Cursos.filter((itemDatos) => {
            return itemDatos.id === Number(value);
        });
        total = total + itemNecesario[0].precio;
    });
    // Usando toFixed mostrando en HTML para ver decimales (centavos) //
    DOMprecio.textContent = total.toFixed(2);
}

//=============================================================================================================//

//============================================ VACIAR CARRITO =================================================//

function vaciarCarrito() {
    // Vaciamos el carrito de compras //
    carrito = [];
    // Inicializar carrito y precio //
    mostrarCarrito();
    calculoPrecioTotal();
}

// Al hacer click en el botón de la papelera se activa la función "vaciarCarrito()" //


//=============================================================================================================//

//========================================= INICIALIZAR FUNCIÓN ===============================================//

mostrarProductos();

//=============================================================================================================//