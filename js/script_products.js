// ELECCIÓN DE PRODUCTOS Y ENVÍO A CARRITO DE COMPRAS // (Simulando que se clickea en botón de algún producto)
function Curso(nombre, precio, profesor) {
    this.nombre = nombre;
    this.precio = precio;
    this.profesor = profesor;
    alert(`Te gustaria comprar el curso de ${this.nombre}`);
}

const curso1 = new Curso("HTML", "$5000", "Ramon Diaz");
const curso2 = new Curso("CSS", "$5000", "Ramon Diaz");
const curso3 = new Curso("JS", "$5000", "Ramon Diaz");
const curso4 = new Curso("ReactJS", "$5000", "Ramon Diaz");
const curso5 = new Curso("PHP", "$5000", "Ramon Diaz");
const curso6 = new Curso("Python", "$5000", "Ramon Diaz");
const curso7 = new Curso("C++", "$5000", "Ramon Diaz");
