/*alert("¡Bienvenido! Iniciá sesión para poder entrar a tu usuario"); // Alerta de Bienvenida General

for (i = 0; i !=0 ; i ++) {
    let nombre_persona = prompt("Ingresa tu Nombre"); // Ingresando dato: "nombre_persona"
    let apellido_persona = prompt("Ingresa tu Apellido"); // Ingresando dato: "apellido_persona"
    alert(`Bienvenido ${nombre_persona}!`); // Alerta Bienvenida al Usuario
    let nombre_usuario = prompt("Ingresa el nombre de usuario que quieras usar"); // Ingresando dato: "nombre_de_usuario"
    let password = prompt("Ingresa una Contraseña"); // Ingresando dato: "password"
    alert(`Eres el usuario nº${i}`);
    break;
}*/

// VALIDACIÓN DE USUARIO //
// class usuario {
//     constructor(nombre_, apellido_, usuario_, password_) {
//         this.nombre_ = nombre_; 
//         this.apellido_ = apellido_;
//         this.usuario_ = usuario_;
//         this.password_ = password_;
//         // Declarando la función usuario() para agregar registrar usuario //
//         this.crearUsuario = function() {
//             let usuario_persona = new usuario(nombre_p, apellido_p, usuario_p, password_p);
//         }
//     }
// }

// // REEMPLAZAR "IF" POR "SWITCH" PARA LA SEGUNDA ENTREGA //
            // if (nombre_ === "" && apellido_ === "" && usuario_ === "" && password_ === "") {
            //     alert("No ingresaste ningún dato");
            //     // Se está indicando que no puso ningún dato en ningún campo //
            // } else if (nombre_ == null || apellido_ == null || usuario_ == null || password_ == null) {
            //     alert("No ingresaste ningún dato");
            //     // Se está indicando que clickeó el botón "Cancelar" en todos los campos y lo traduce como que no puso ningún dato //
            // } else if (nombre_ == "" || apellido_ == "" || usuario_ == "" || password_ == "") {
            //     alert("No dejes ningún campo vacío");
            //     // Se está indicando que en alguno de los campos no puso algún dato o el dato es null //
            // } else {
            //     respuesta = `Usuario creado con éxito!\nVerificaremos tus datos para una correcta gestión:\n\n Nombre: ${nombre_} \n Apellido: ${apellido_} \n Nombre de Usuario: ${usuario_} \n Contraseña: ${password_}`;
            //     return alert(respuesta);
            // }
            // if (i == 3) {
            //     alert("Has alcanzado el límite de intentos");
            //     break;
            //     // Se indicó que el número de intentos posibles por ingresar datos es de "3", y luego de "rompe" el ciclo //


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
    let usuario_nuevo = [nombre_, apellido_, usuario_, contrasena_];
    // Agregando array dentro de "usuario" //
    usuario.push(usuario_nuevo);
    console.table(usuario);
}