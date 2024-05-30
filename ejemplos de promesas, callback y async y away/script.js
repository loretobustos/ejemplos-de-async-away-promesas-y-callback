// Promesas (Promises)
// Una promesa es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante
// Ejemplo de Promesa
function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true; // Cambia esto a false para ver cómo funciona el rechazo
            if (exito) {
                resolve("Datos obtenidos correctamente");
            } else {
                reject("Error al obtener los datos");
            }
        }, 2000);
    });
}

obtenerDatos()
    .then((resultado) => {
        console.log(resultado); // "Datos obtenidos correctamente"
    })
    .catch((error) => {
        console.error(error); // "Error al obtener los datos"
    });





    // Callback
// Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que se completa una operación.
// Ejemplo de Callback
function obtenerDatosConCallback(callback) {
    setTimeout(() => {
        const exito = true; // Cambia esto a false para simular un error
        if (exito) {
            callback(null, "Datos obtenidos correctamente");
        } else {
            callback("Error al obtener los datos", null);
        }
    }, 2000);
}

obtenerDatosConCallback((error, resultado) => {
    if (error) {
        console.error(error);
    } else {
        console.log(resultado);
    }
});








// Async y Await
// async y await son sintaxis para trabajar con promesas de una manera más sencilla y legible. async declara una función asíncrona y await se usa para esperar una promesa
// Ejemplo de Async y Await
function obtenerDatosAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true; // Cambia esto a false para ver cómo funciona el rechazo
            if (exito) {
                resolve("Datos obtenidos correctamente");
            } else {
                reject("Error al obtener los datos");
            }
        }, 2000);
    });
}

async function main() {
    try {
        const resultado = await obtenerDatosAsync();
        console.log(resultado); // "Datos obtenidos correctamente"
    } catch (error) {
        console.error(error); // "Error al obtener los datos"
    }
}

main();
