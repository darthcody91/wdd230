const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=55fabb0529e11ab638f2e68f25e2cb38";
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
 
 //noon.forEach (forecast => {
 // let thedate = new Date(forecast.dt_txt);
       
 const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
 const desc = jsObject.weather[0].description;  // note how we reference the weather array
 document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
 document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
 document.getElementById('icon').setAttribute('alt', desc);

});