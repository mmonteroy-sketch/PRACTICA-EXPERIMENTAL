
document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault();

    // Declaracion del vector
    let calificaciones = new Array(15);

    // Declaracion de variables
    let buscada;
    let encontrados = 0;
    let superiores = 0;
    let inferiores = 0;
    let iguales = 0;
    let mayor;
    let posicionMayor = 1;
    let posiciones = "";

    // Ingreso de las 15 calificaciones
    for (let i = 0; i < 15; i++) {

        calificaciones[i] = Number(document.getElementById("nota" + i).value);

        if (calificaciones[i] < 0 || calificaciones[i] > 10) {
            alert("Las calificaciones deben estar entre 0 y 10");
            return;
        }
    }

    // Ingreso de la calificacion de referencia
    buscada = Number(document.getElementById("busqueda").value);

    if (buscada < 0 || buscada > 10) {
        alert("La calificacion buscada debe estar entre 0 y 10");
        return;
    }

    // Inicializar la calificacion mayor
    mayor = calificaciones[0];

    // Recorrer el vector
    for (let i = 0; i < 15; i++) {

        // Buscar la calificacion
        if (calificaciones[i] == buscada) {

            encontrados++;

            if (posiciones == "") {
                posiciones = (i + 1);
            } else {
                posiciones = posiciones + ", " + (i + 1);
            }
        }

        // Contar calificaciones superiores, inferiores e iguales
        if (calificaciones[i] > buscada) {
            superiores++;
        } 
        else if (calificaciones[i] < buscada) {
            inferiores++;
        } 
        else {
            iguales++;
        }

        // Encontrar la calificacion mas alta
        if (calificaciones[i] > mayor) {
            mayor = calificaciones[i];
            posicionMayor = i + 1;
        }
    }

    // Mostrar los resultados
    let resultado = "";

    resultado += "<table border='1' cellpadding='8'>";

    resultado += "<tr><th colspan='2'>Busqueda de calificacion</th></tr>";

    resultado += "<tr><td>Calificacion buscada</td><td>" + buscada + "</td></tr>";

    if (encontrados > 0) {

        resultado += "<tr><td>Calificacion encontrada</td><td>Si existe</td></tr>";

        resultado += "<tr><td>Cantidad de coincidencias</td><td>" + encontrados + "</td></tr>";

        resultado += "<tr><td>Posiciones encontradas</td><td>" + posiciones + "</td></tr>";

    } else {

        resultado += "<tr><td>Resultado</td><td>No se encontraron coincidencias</td></tr>";

    }

    resultado += "<tr><th colspan='2'>Analisis de calificaciones</th></tr>";

    resultado += "<tr><td>Calificaciones superiores</td><td>" + superiores + "</td></tr>";

    resultado += "<tr><td>Calificaciones inferiores</td><td>" + inferiores + "</td></tr>";

    resultado += "<tr><td>Calificaciones iguales</td><td>" + iguales + "</td></tr>";

    resultado += "<tr><th colspan='2'>Calificacion mas alta</th></tr>";

    resultado += "<tr><td>Nota mas alta</td><td>" + mayor + "</td></tr>";

    resultado += "<tr><td>Primera posicion donde aparece</td><td>" + posicionMayor + "</td></tr>";

    resultado += "</table>";

    document.getElementById("resultado").innerHTML = resultado;

});
