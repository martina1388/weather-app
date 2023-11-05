let date = new Date();
let currentDay = document.querySelector("div.current-day");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[date.getDay()];
let hour = String(date.getHours()).padStart(2, "0");
let minutes = String(date.getMinutes()).padStart(2, "0");

currentDay.innerHTML = `${day} ${hour}:${minutes}`;

function showWeather(response) {
  let temperature = document.querySelector(".temperature");
  let weatherTemperature = Math.round(response.data.main.temp);
  temperature.innerHTML = `${weatherTemperature}`;

  //let sunrise = document.querySelector("#sunrise");
  //let sunriseTime = response.data.sys.sunrise;
  //sunrise.innerHTML = `Sunrise: ${sunriseTime}`;

  //let sunset = document.querySelector("#sunset");
  //let sunsetTime = response.data.sys.sunset;
  //sunset.innerHTML = `Sunset: ${sunsetTime}`;

  let description = document.querySelector("#description");
  let weatherDescription = response.data.weather[0].description;
  description.innerHTML = `${weatherDescription}`;

  let weatherHumidity = Math.round(response.data.wind.speed);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${weatherHumidity}%`;

  let weatherWind = Math.round(response.data.wind.speed * 3.6);
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind: ${weatherWind}km/h`;

  console.log(response.data);
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "ad173c8a30c3588b5735e0fcc64ebbd3";
  let units = "metric";
  let cityInput = document.querySelector(".search-input");
  let city = document.querySelector(".city");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=${units}`;

  city.innerHTML = `${cityInput.value.trim()}`;
  axios.get(apiUrl).then(showWeather);
}

let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", searchCity);

//function sayCelsiusTemp(event) {
//event.preventDefault();
//let temperature = document.querySelector(".temperature");
//temperature.innerHTML = "12";
//}

//function sayFahreneitTemp(event) {
//event.preventDefault();
// let temperature = document.querySelector(".temperature");
//temperature.innerHTML = "87";
//}

//let celsius = document.querySelector("#celsius-temperature");
//let fahreneit = document.querySelector("#fahreneit-temperature");
//celsius.addEventListener("click", sayCelsiusTemp);
//fahreneit.addEventListener("click", sayFahreneitTemp);