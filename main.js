//var esta en desuso! no completamente
let cantidad = document.getElementById("cantidad");
let passwordGenerada = document.getElementById("contrasena");
//accedemos al los elementos con document
let boton = document.getElementById("generar");
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';


const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    if(numeroDigitado < 8 && numeroDigitado!=0 && numeroDigitado != ''){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return;
    }
    let password = '';
    for (let index = 0; index < numeroDigitado; index++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password +=caracterAleatorio;
    }
    passwordGenerada.value = password;
    evaluarFuerza(password);
}
function evaluarFuerza(password) {
    let fuerza = 0;
    let tieneMayuscula = false;
    let tieneMiscula = false;
    let tieneNumero = false;
    let tieneCaracterEspecial = false;

// Recorrer cada caracter de la contraseña
for (let i = 0; i < password.length; i++) {
    //Se asigna el valor con el indice a la variable
    let char = password[i];

    // Verificar si es una mayúscula
    if (!tieneMayuscula && char.match(/[A-Z]/)) {
        fuerza += 1;
        tieneMayuscula = true;  // Marcar que ya encontramos una mayúscula
    }

    // Verificar si es una minúscula
    if (!tieneMiscula && char.match(/[a-z]/)) {
        fuerza += 1;
        tieneMiscula = true;  // Marcar que ya encontramos una minúscula
    }

    // Verificar si es un número
    if (!tieneNumero && char.match(/[0-9]/)) {
        fuerza += 1;
        tieneNumero = true;  // Marcar que ya encontramos un número
    }

    // Verificar si es un carácter especial
    if (!tieneCaracterEspecial && char.match(/[\W_]/)) {
        fuerza += 1;
        tieneCaracterEspecial = true;  // Marcar que ya encontramos un carácter especial
    }
}
    /* // Evaluar mayúsculas
    if (password.match(/[A-Z]/)) fuerza += 1;  // Al menos una mayúscula

    // Evaluar minúsculas
    if (password.match(/[a-z]/)) fuerza += 1;  // Al menos una minúscula

    // Evaluar números
    if (password.match(/[0-9]/)) fuerza += 1;  // Al menos un número

    // Evaluar caracteres especiales (se asegura que al menos uno esté presente)
    if (password.match(/[\W_]/)) fuerza += 1;  // Al menos un carácter especial */

    // Actualizamos la barra de progreso y el texto según la fuerza
    if (fuerza === 0) {
        strengthBar.className = 'strength-bar';
        strengthText.textContent = 'No válido';
    } else if (fuerza <= 2) {
        strengthBar.className = 'strength-bar weak';
        strengthText.textContent = 'Contraseña débil';
    } else if (fuerza === 3) {
        strengthBar.className = 'strength-bar medium';
        strengthText.textContent = 'Contraseña media';
    } else {
        strengthBar.className = 'strength-bar strong';
        strengthText.textContent = 'Contraseña fuerte';
    }
}


// Función para limpiar los campos
function limpiar() {
    cantidad.value = "";
    passwordGenerada.value = "";
    strengthBar.className = 'strength-bar';  // Restablecer barra
    strengthText.textContent = '';  // Restablecer texto
}