// 날씨 API
const weather = document.querySelector(".js-weather");

const COORDS = 'coords';
const APIKEY = '119e0e25b73354457684a68aa5a5bdf2';

function getWeather(lat, lon) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}ºC @ ${place}`;
      });
}

function saveCoords(coordObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        latitude,
        longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Can't access your location")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoord = localStorage.getItem(COORDS);

    if (loadedCoord === null) {
        askForCoords();
    } else {
        const parsedCoord = JSON.parse(loadedCoord);
        getWeather(parsedCoord.latitude, parsedCoord.longitude);
    }
}

function init(){
    loadCoords();
}

init();