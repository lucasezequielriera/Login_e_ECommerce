'use strict'

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

// Object Constructor //
function Curso(nombre, precio, profesor, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.profesor = profesor;
    this.stock = stock;
}


// Instanciando las propiedades del objeto constructor (Productos) //
// Object Literal (manera resumida) //
const Curso1 = new Curso("HTML", "$6000", "Lucas Riera", 5);
const Curso2 = new Curso("CSS", "$8000", "Ramon Diaz", 5);
const Curso3 = new Curso("JS", "$3000", "Cristina Sanchez", 5);
const Curso4 = new Curso("ReactJS", "$4000", "Julieta Diaz", 5);
const Curso5 = new Curso("PHP", "$8000", "Cristina Perez", 5);
const Curso6 = new Curso("Python", "$15000", "Leonardo Miguel", 5);
const Curso7 = new Curso("C++", "$9000", "Iara Paez", 5);

//=============================================================================================================//

//============================================ COMPRAR PRODUCTOS ==============================================//

// Definir Array del Carrito //
let Carrito = [localStorage.getItem("Carrito")];

// Definir el contador a "0" o al localStorage //
let contador;
if (contador != 0) {
    contador = Number(localStorage.getItem("posicion_contador"));
} else {
    contador = 0;
}

// Función en donde se agrega cada curso al carrito, y luego se guarda por LocalStorage //
function agregarAlCarrito(curso) {
    let resultado = confirm(`¿Estás seguro que quieres comprar el curso de ${curso.nombre}?`);
        // Condicional para agregar al carrito o no //
        if (resultado == true) {
            alert("Compra realizada con éxito!");
            Carrito.push(curso);
            localStorage.setItem("Carrito", JSON.stringify(Carrito));
            contador = contador + 1;
            // Utilizando Storage para guardar datos del contador //
            localStorage.setItem("posicion_contador", contador);
            // Utilizando DOM para insertar el contador en el badge de Bootstrap //
            document.getElementById("contador").innerHTML = contador;
        }
        else {alert("No hay problema")};
}

//=============================================================================================================//

//========================================= PRODUCTOS (EN EL CARRITO) =========================================// 

function getCarrito() {
    let button = `<button class="btn btn-danger" onclick="limpiar()">X</button>`
    Carrito = JSON.parse(localStorage.getItem("Carrito"));
    Carrito.forEach(function (value) {
        document.getElementById("table_productos_comprados").innerHTML += 
        `<tr> <td> ${value.nombre}</td> <td> ${value.precio}</td> <td> ${value.profesor}</td> <td> ${value.stock}</td> <td>${button}</td></tr>`;
    });
}


//=============================================================================================================//

//================================ OPTIONAL (LIMPIAR STORAGE POR CONSOLA) =====================================//

// Limpiar Storage una vez que se inicializa la function limpiar() y se escribe el String indicado //
function limpiar() {
    localStorage.clear();
    location.reload();
}

//=============================================================================================================//
window.reload(document.getElementById("contador").innerHTML = contador);