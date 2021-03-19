// ELECCIÓN DE PRODUCTOS Y ENVÍO A CARRITO DE COMPRAS // (Simulando que se clickea en botón de algún producto)
let decision;
let respuesta;


function Curso(nombre, precio, profesor) {
    this.nombre = nombre;
    this.precio = precio;
    this.profesor = profesor;
    return `Curso ${this.nombre}`;
}

const curso1 = new Curso("HTML", "$5000", "Ramon Diaz");
const curso2 = new Curso("CSS", "$5000", "Ramon Diaz");
const curso3 = new Curso("JS", "$5000", "Ramon Diaz");
const curso4 = new Curso("ReactJS", "$5000", "Ramon Diaz");
const curso5 = new Curso("PHP", "$5000", "Ramon Diaz");
const curso6 = new Curso("Python", "$5000", "Ramon Diaz");
const curso7 = new Curso("C++", "$5000", "Ramon Diaz");


    function comprar() {

    let decision = confirm(`Te gustaría comprar el producto: ${Curso(curso1.nombre)}?`);
    if (decision == true) {
        respuesta = "Perfecto! Tu producto fue agregado al carrito de compras";
        // Acá debería haber un elemento que envíe el dato al carrito de compras y el badge se ponga en "1" o en el valor de tantos productos agregó al carrito. //
    }
    else {
        respuesta = "No hay problema, tenemos muchos productos para vos";
        
    }
    return alert(respuesta);
}