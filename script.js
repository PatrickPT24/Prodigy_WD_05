const inputBox = document.querySelector('.input_box');
const searchBtn = document.getElementById('searchBtn');
const Weather_Default_Image = document.querySelector('.Weather_Default_Image');
const Temperature = document.querySelector('.Temperature');
const Description = document.querySelector('.Description');
const Humidity = document.getElementById('humidity');
const Wind_Speed = document.getElementById('Wind-Speed');
const Location_not_found = document.querySelector('.location-not-found');
const Weather_body = document.querySelector('.weather_body');

async function checkWeather(city) {
    const api_key = "ca489baca96452cf8bf6120f1abed145";
    const base_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${base_url}`).then(response => response.json());

    if (weather_data.cod === `404`) {
        Location_not_found.style.diplay = "flex";
        Weather_body.style.display = "none";
        console.log('error');
    }
    Location_not_found.style.diplay = "none";
    Weather_body.style.display = "flex";


    Temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    Description.innerHTML = `${weather_data.weather[0].description}`;
    Humidity.innerHTML = `${weather_data.main.humidity}%`;
    Wind_Speed.innerHTML = `${weather_data.wind.speed} kmph`;
    
    switch (weather_data.weather[0].main) {
        case 'Clouds':
            Weather_Default_Image.src = "../Prodigy_WD_05/images/Cloudy_07.png"
            // Weather_Default_Image.src = "/Wheather_Display_page/WD_05/images/Cloudy_07.png"
            break;
        case 'Clear':
            Weather_Default_Image.src = "../Prodigy_WD_05/images/Sunny_03.png"
            // Weather_Default_Image.src = "/Wheather_Display_page/WD_05/images/Sunny_03.png"
            break;
        case 'Rain':
            Weather_Default_Image.src = "../Prodigy_WD_05/images/Rainny_02.png"
            // Weather_Default_Image.src = "/Wheather_Display_page/WD_05/images/Rainny_02.png"
            break;
        case 'Mist':
            Weather_Default_Image.src = "../Prodigy_WD_05/images/Moderate_01.png"
            // Weather_Default_Image.src = "/Wheather_Display_page/WD_05/images/Moderate_01.png"
            break;
        case 'Snow':
            Weather_Default_Image.src = "../Prodigy_WD_05/images/Snow_06.png"
            // Weather_Default_Image.src = "/Wheather_Display_page/WD_05/images/Snow_06.png"
            break;    
        default:
            break;
    }
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});