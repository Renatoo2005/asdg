
// Generar un número aleatorio entre 1 y 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Comprobar si el número es par o impar
if (numeroAleatorio % 2 === 0) {
    console.log("El número " + numeroAleatorio + " es par.");
} else {
    console.log("El número " + numeroAleatorio + " es impar.");
}