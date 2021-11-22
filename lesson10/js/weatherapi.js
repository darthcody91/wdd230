const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=55fabb0529e11ab638f2e68f25e2cb38";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
});