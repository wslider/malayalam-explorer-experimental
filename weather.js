async function getWeather(latitude, longitude) {
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const weather = data.current_weather;
        console.log(`Temperature: ${weather.temperature} C`);
        return weather.temperature; // Return temperature directly
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

async function displayMunnarWeather() {
    const munnarWeather = await getWeather(10.0890, 77.0700); // Await the Promise
    const munnarWeatherText = document.getElementById('munnarWeather'); // Use document.getElementById
    if (munnarWeather !== null && munnarWeatherText) {
        munnarWeatherText.textContent = `Munnar Weather: Temperature = ${munnarWeather} C`; // Correct property name
    } else {
        console.error('Failed to update Munnar weather display');
    }
}

async function displayTrivandrumWeather() {
    const trivandrumWeather = await getWeather(8.500, 76.900);
    const trivandrumWeatherText = document.getElementById('trivandrumWeather');
    if (trivandrumWeather!== null && trivandrumWeatherText){
        trivandrumWeatherText.textContent = `Trivandrum Weather: Temperature = ${trivandrumWeather} C`;
    }
    else {
        console.error('failed to update Trivandrum weather display')
    }
}




// Run immediately and every 60 seconds
displayMunnarWeather();
setInterval(displayMunnarWeather, 60000);

displayTrivandrumWeather();
setInterval(displayTrivandrumWeather, 60000); 