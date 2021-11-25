const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=55fabb0529e11ab638f2e68f25e2cb38&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('wind-speed').textContent = jsObject.wind.speed;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('current').textContent = jsObject.weather[0].main;

var temp= 'current-temp';
var wSpeed= 'wind-speed';
var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windChill= Math.round(windChill);
document.getElementById("wind-chill").innerHTML= windChill;

});




