console.log("JS funcionando");

var clasificaciones = ["Ana", "Pedro", "Mariano", "Clara", "Axel", "Anton"];

/* for clasico */

document.write("<br>" + "Clasificación 1: " + "<br>");

let posicion1 = 1;

for (let i = 0; i < clasificaciones.length; i++) {
    document.write(`${posicion1++}° - ${clasificaciones[i]} <br>`);
};

/* for clasico */

document.write("<br>" + "Clasificación 2: " + "<br>");

clasificaciones[2] = "Clara";
clasificaciones[3] = "Mariano";

let posicion2 = 1;

for (let i = 0; i < clasificaciones.length; i++) {
    document.write(`${posicion2++}° - ${clasificaciones[i]} <br>`);
};

/* for ciclo */

document.write("<br>" + "Clasificación 3: " + "<br>");

clasificaciones.pop();

let posicion3 = 1

for (const ciclo of clasificaciones) {
    document.write(`${posicion3++}° - ${ciclo} <br>`);      
}

/* foreach */

document.write("<br>" + "Clasificación 4: " + "<br>");

clasificaciones.splice(1, 0, "Roberto", "Analia")

let posicion4 = 1

clasificaciones.forEach(element => {
    document.write(`${posicion4++}° - ${element} <br>`);   
});

/* foreach */

document.write("<br>" + "Clasificación 5: " + "<br>");

clasificaciones.unshift("Marcela");

let posicion5 = 1

clasificaciones.forEach(element => {
    document.write(`${posicion5++}° - ${element} <br>`);   
});