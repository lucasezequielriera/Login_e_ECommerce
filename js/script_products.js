// ELECCIÓN DE PRODUCTOS Y ENVÍO A CARRITO DE COMPRAS // (Simulando que se clickea en botón de algún producto)
/*function Curso(nombre, precio, profesor) {
    this.nombre = nombre;
    this.precio = precio;
    this.profesor = profesor;
}*/

class Curso {
    constructor(nombre, precio, profesor, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.profesor = profesor;
        this.stock = stock;
    }
}

function comprarProducto1() {
    resultado = confirm(`¿Estás seguro que quieres comprar el curso de ${Curso1.nombre}?`);
    if (resultado) {
        alert("Compra realizada con éxito!");
    }
    else {
        alert("Hubo un problema y no puedes comprar el curso");
    }
}
function comprarProducto2() {
    resultado = confirm(`¿Estás seguro que quieres comprar el curso de ${Curso2.nombre}?`);
    if (resultado) {
        alert("Compra realizada con éxito!");
    }
    else {
        alert("Hubo un problema y no puedes comprar el curso");
    }
}
function comprarProducto3() {
    resultado = confirm(`¿Estás seguro que quieres comprar el curso de ${Curso3.nombre}?`);
    if (resultado) {
        alert("Compra realizada con éxito!");
    }
    else {
        alert("Hubo un problema y no puedes comprar el curso");
    }
}
function comprarProducto4() {
    resultado = confirm(`¿Estás seguro que quieres comprar el curso de ${Curso4.nombre}?`);
    if (resultado) {
        alert("Compra realizada con éxito!");
    }
    else {
        alert("Hubo un problema y no puedes comprar el curso");
    }
}
function comprarProducto5() {
    resultado = confirm(`¿Estás seguro que quieres comprar el curso de ${Curso5.nombre}?`);
    if (resultado) {
        alert("Compra realizada con éxito!");
    }
    else {
        alert("Hubo un problema y no puedes comprar el curso");
    }
}
function comprarProducto6() {
    resultado = confirm(`¿Estás seguro que quieres comprar el curso de ${Curso6.nombre}?`);
    if (resultado) {
        alert("Compra realizada con éxito!");
    }
    else {
        alert("Hubo un problema y no puedes comprar el curso");
    }
}
function comprarProducto7() {
    resultado = confirm(`¿Estás seguro que quieres comprar el curso de ${Curso7.nombre}?`);
    if (resultado) {
        alert("Compra realizada con éxito!");
    }
    else {
        alert("Hubo un problema y no puedes comprar el curso");
    }
}

const Curso1 = new Curso("HTML", "$5000", "Ramon Diaz", 5);
const Curso2 = new Curso("CSS", "$5000", "Ramon Diaz", 5);
const Curso3 = new Curso("JS", "$5000", "Ramon Diaz", 5);
const Curso4 = new Curso("ReactJS", "$5000", "Ramon Diaz", 5);
const Curso5 = new Curso("PHP", "$5000", "Ramon Diaz", 5);
const Curso6 = new Curso("Python", "$5000", "Ramon Diaz", 5);
const Curso7 = new Curso("C++", "$5000", "Ramon Diaz", 5);

function cambiaColor() {
    let colorTexto = document.getElementById('Cambiar');
    colorTexto.style.backgroundColor = prompt("elige un color");
}