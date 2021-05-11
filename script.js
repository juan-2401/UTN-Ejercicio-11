console.log("JS funcionando");

var clasificaciones = ["Ana", "Pedro", "Mariano", "Clara", "Axel", "Anton"];

let posicion = 1;

document.write("Clasificación Actual: " + "<br>");

for (let i = 0; i < clasificaciones.length; i++) {
    document.write(`${posicion++}° - ${clasificaciones[i]} <br>`);
};
