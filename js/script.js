const fetchWeather = async () => {
    
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const city = 'Sarasota';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};
fetchWeather();

const displayWeather = (data) => {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    // DOM manipulation to display weather information
    const iconElement = document.getElementById('weather-icon');
    const tempElement = document.getElementById('weather-temp');
    const descriptionElement = document.getElementById('weather-description');

    // Set the icon
    iconElement.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">`;

    // Display temperature and description
    tempElement.textContent = `${Math.round(data.main.temp)}°F`;
    descriptionElement.textContent = data.weather[0].description;

    // Make the weather box visible
    const weatherBox = document.getElementById('weather');
    weatherBox.classList.remove('d-none');
};
displayWeather(data);