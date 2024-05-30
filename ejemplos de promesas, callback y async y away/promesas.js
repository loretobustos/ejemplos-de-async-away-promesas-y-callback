// Promesas (Promises) - Ejemplo Adicional
// Imaginemos que tenemos que obtener datos de un servidor simulando una llamada HTTP.
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = {
                1: { name: "John Doe", age: 30 },
                2: { name: "Jane Smith", age: 25 }
            };
            const user = users[userId];
            if (user) {
                resolve(user);
            } else {
                reject("Usuario no encontrado");
            }
        }, 2000);
    });
}

fetchUserData(1)
    .then(user => {
        console.log(`Nombre: ${user.name}, Edad: ${user.age}`);
    })
    .catch(error => {
        console.error(error);
    });







    // Promesas con Encadenamiento (Chaining)
// Este ejemplo muestra cómo encadenar múltiples promesas para realizar varias operaciones secuenciales.
function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Paso 1 completado");
            resolve("Datos del paso 1");
        }, 1000);
    });
}

function step2(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Paso 2 completado con", data);
            resolve("Datos del paso 2");
        }, 1000);
    });
}

function step3(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Paso 3 completado con", data);
            resolve("Datos del paso 3");
        }, 1000);
    });
}

step1()
    .then(step2)
    .then(step3)
    .then(finalData => {
        console.log("Todos los pasos completados:", finalData);
    })
    .catch(error => {
        console.error("Error en uno de los pasos:", error);
    });
