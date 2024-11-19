//var esta en desuso! no completamente
let cantidad = document.getElementById("cantidad");
let passwordGenerada = document.getElementById("contrasena");
//accedemos al los elementos con document
let boton = document.getElementById("generar");
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    if(numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    }
    let password = '';
    for (let index = 0; index < numeroDigitado; index++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password +=caracterAleatorio;
    }
    passwordGenerada.value = password;
}