// Callback - Ejemplo Adicional
// Aquí hay un ejemplo donde una función lee un archivo (simulado) y luego ejecuta un callback con el contenido del archivo.
function readFile(filename, callback) {
    setTimeout(() => {
        const files = {
            "data.txt": "Contenido del archivo data.txt",
            "info.txt": "Contenido del archivo info.txt"
        };
        const fileContent = files[filename];
        if (fileContent) {
            callback(null, fileContent);
        } else {
            callback("Archivo no encontrado", null);
        }
    }, 2000);
}

readFile("data.txt", (error, content) => {
    if (error) {
        console.error(error);
    } else {
        console.log(content);
    }
});







// Callbacks Anidados (Callback Hell)
// Este ejemplo muestra cómo pueden anidarse múltiples callbacks, lo que puede llevar a un código difícil de leer y mantener.
function firstTask(callback) {
    setTimeout(() => {
        console.log("Primera tarea completada");
        callback();
    }, 1000);
}

function secondTask(callback) {
    setTimeout(() => {
        console.log("Segunda tarea completada");
        callback();
    }, 1000);
}

function thirdTask(callback) {
    setTimeout(() => {
        console.log("Tercera tarea completada");
        callback();
    }, 1000);
}

firstTask(() => {
    secondTask(() => {
        thirdTask(() => {
            console.log("Todas las tareas completadas");
        });
    });
});
