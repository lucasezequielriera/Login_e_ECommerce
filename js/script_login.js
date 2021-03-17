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

let nombre_; 
let apellido_;
let usuario_;
let password_;

function usuario() {

    for(let i=1; i<=4; i++) { // Conteo de 3 veces como máximo para volver a ingresar los datos erróneos o vacíos //

        let nombre_ = prompt("Ingresa tu nombre");
        let apellido_ = prompt("Ingreso tu apellido");
        let usuario_ = prompt("Ingresa el nombre de usuario que quieras");
        let password_ = prompt("Ingresa una contraseña para tu usuario");

        if (nombre_ === "" && apellido_ === "" && usuario_ === "" && password_ === "") {
            alert("No ingresaste ningún dato");
            // Se está indicando que no puso ningún dato en ningún campo //
        }
        else if (nombre_ == null || apellido_ == null || usuario_ == null || password_ == null) {
            alert("No ingresaste ningún dato");
            // Se está indicando que clickeó el botón "Cancelar" en todos los campos y lo traduce como que no puso ningún dato //
        }
        else if (nombre_ == "" || apellido_ == "" || usuario_ == "" || password_ == "") {
            alert("No dejes ningún campo vacío");
            // Se está indicando que en alguno de los campos no puso algún dato o el dato es null //
        }
        else {
            respuesta = `Usuario creado con éxito!\nVerificaremos tus datos para una correcta gestión:\n\n Nombre: ${nombre_} \n Apellido: ${apellido_} \n Nombre de Usuario: ${usuario_} \n Contraseña: ${password_}`;
            return alert(respuesta);
        }
        if (i == 3) {
            alert("Has alcanzado el límite de intentos");
            break;
            // Se indicó que el número de intentos posibles por ingresar datos es de "3", y luego de "rompe" el ciclo //
        }
    }
}

usuario();







// Prueba con Do While

/*
do {
    nombre_ = prompt("Escribe un nombre");
    apellido_ = prompt("Escribe tu apellido"); 

} while (nombre_ == "" || apellido_ == "");

alert(`Bienvenido ${nombre_}`);
*/

// Prueba con IF ELSE IF

/*
let apellido_ = prompt("Escribe tu Apellido:");
alert(`Bienvenido ${nombre_}!`);
let usuario_ = prompt("Elegí un nombre de usuario:");
let password_ = prompt("Elegí una contraseña");
let password_rewrite = prompt("Reescribe la contraseña");

if (password_ != password_rewrite) {
    alert("Las contraseñas no coinciden");
}

if (nombre_ && apellido_ && usuario_ && password_) {
    alert("Usuario creado con éxito!");
    alert(`Eres el usuario nº${conteo}`);
}
else {
    alert("Hubo un error, o no ingresarte algún dato o tus contraseñas no coinciden");
}

alert(`Tu nombre es: ${nombre_usuario} y tu contraseña es: ${password_usuario}`);
*/
