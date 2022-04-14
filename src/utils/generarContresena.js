export const generarContrasena = () => {
    var abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "-", "_", "$", "&", "#", "@"];
    let contraseña = "Inmobiliaria-";

    var numero = 5;
    let numeroAleatorio;

    // paso 2 - escribir x caracteres

    for (var i = 0; i < numero; i++) {
        numeroAleatorio = parseInt(Math.random() * abecedario.length);
        contraseña += numeroAleatorio;
        contraseña += abecedario[parseInt(Math.random() * abecedario.length)];
    }

    return contraseña;
}