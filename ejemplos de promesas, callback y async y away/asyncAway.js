// Async y Await - Ejemplo Adicional
// Vamos a simular una llamada a una API que obtiene la información del clima.
function fetchWeather(city) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const weatherData = {
                "New York": "Soleado, 25°C",
                "Los Angeles": "Nublado, 20°C",
                "Chicago": "Lluvioso, 15°C"
            };
            const weather = weatherData[city];
            if (weather) {
                resolve(weather);
            } else {
                reject("Ciudad no encontrada");
            }
        }, 2000);
    });
}

async function getWeather(city) {
    try {
        const weather = await fetchWeather(city);
        console.log(`El clima en ${city} es: ${weather}`);
    } catch (error) {
        console.error(error);
    }
}

getWeather("New York");







// Uso Combinado de Async/Await y Fetch
// Un ejemplo más práctico usando fetch para realizar una solicitud HTTP real.
async function fetchGithubUser(username) {
    try {
        let response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error('Usuario no encontrado');
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchGithubUser('octocat');
