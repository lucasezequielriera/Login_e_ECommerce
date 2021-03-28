'use strict'

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
const Curso1 = new Curso("HTML", "$5000", "Ramon Diaz", 5);
const Curso2 = new Curso("CSS", "$5000", "Ramon Diaz", 5);
const Curso3 = new Curso("JS", "$5000", "Ramon Diaz", 5);
const Curso4 = new Curso("ReactJS", "$5000", "Ramon Diaz", 5);
const Curso5 = new Curso("PHP", "$5000", "Ramon Diaz", 5);
const Curso6 = new Curso("Python", "$5000", "Ramon Diaz", 5);
const Curso7 = new Curso("C++", "$5000", "Ramon Diaz", 5);

//=============================================================================================================//

//============================================ COMPRAR PRODUCTOS ==============================================//

// Definir Array del Carrito //
let Carrito = [];
let contador = 0;
sessionStorage.getItem("posicion_contador");

// Función en donde se agrega cada curso al carrito, y luego se guarda por SessionStorage //
function agregarAlCarrito(curso) {

    let resultado = confirm(`¿Estás seguro que quieres comprar el curso de ${curso.nombre}?`);
        // Condicional para agregar al carrito o no //
        if (resultado == true) {
            alert("Compra realizada con éxito!");
            Carrito.push(curso);
            sessionStorage.setItem("Carrito", JSON.stringify(Carrito));
            contador = contador + 1;
            // Utilizando DOM para insertar el contador en el badge de Bootstrap //
            document.getElementById("contador").innerHTML = contador;
            // Utilizando Storage para guardar datos del contador //
            sessionStorage.setItem("posicion_contador", contador);
        } else alert("No hay problema");
}

//=============================================================================================================//

//========================================= PRODUCTOS (EN EL CARRITO) =========================================// 

function getCarrito() {
    Carrito = JSON.parse(sessionStorage.getItem("Carrito"));
    Carrito.forEach(function (value) {
        document.getElementById("table_productos_comprados").innerHTML += 
        `<tr> <td> ${value.nombre}</td> <td> ${value.precio}</td> <td> ${value.profesor}</td> <td> ${value.stock}</td> </tr>`;
    });
}

//=============================================================================================================//

//================================ OPTIONAL (LIMPIAR STORAGE POR CONSOLA) =====================================//

// Limpiar Storage una vez que se inicializa la function limpiar() y se escribe el String indicado //
function limpiar() {
    let limpiar_consola;
    do {
        limpiar_consola = prompt("Escribe");
    } while (limpiar_consola != "limpiar");
    // Una vez que se escribe "limpiar" se limpia el Storage //
    if (limpiar_consola == "limpiar") {
        sessionStorage.clear();
        window.location.reload();
        return;
    }
}

//=============================================================================================================//