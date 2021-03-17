// ELECCIÓN DE PRODUCTOS Y ENVÍO A CARRITO DE COMPRAS // (Simulando que se clickea en botón de algún producto)

let decision = confirm("Te gustaría comprar este producto?");

if (decision == true) {
    alert("Perfecto! Tu producto fue agregado al carrito de compras");
    // Acá debería haber un elemento que envíe el dato al carrito de compras y el badge se ponga en "1" o en el valor de tantos productos agregó al carrito. //
}
else {
    alert("No hay problema, tenemos muchos productos para vos");
}