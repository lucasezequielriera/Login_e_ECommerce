// Declarando variables usando Storage//
let i = sessionStorage.getItem("posicion_contador");
let contador = 0;
// Constructor //
class Curso {
    constructor(nombre, precio, profesor, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.profesor = profesor;
        this.stock = stock;
        // Función al hacer click en Producto //
        this.comprarProducto = function() {
            let resultado = confirm(`¿Estás seguro que quieres comprar el curso de ${this.nombre}?`);
            // Condicional para agregar al carrito o no //
            if (resultado) {
                alert("Compra realizada con éxito!");
                i++;
                // Utilizando DOM para insertar el contador en el badge de Bootstrap //
                document.getElementById("contador").innerHTML = i;
                // Utilizando Storage para guardar datos del contador //
                contador = sessionStorage.setItem("posicion_contador", i);
            }
        }
    }
}

// Instanciando las propiedades del objeto constructor (Productos) //
const Curso1 = new Curso("HTML", "$5000", "Ramon Diaz", 5);
const Curso2 = new Curso("CSS", "$5000", "Ramon Diaz", 5);
const Curso3 = new Curso("JS", "$5000", "Ramon Diaz", 5);
const Curso4 = new Curso("ReactJS", "$5000", "Ramon Diaz", 5);
const Curso5 = new Curso("PHP", "$5000", "Ramon Diaz", 5);
const Curso6 = new Curso("Python", "$5000", "Ramon Diaz", 5);
const Curso7 = new Curso("C++", "$5000", "Ramon Diaz", 5);