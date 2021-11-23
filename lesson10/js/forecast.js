const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=55fabb0529e11ab638f2e68f25e2cb38";
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
  const noon = jsObject.list.filter(x => x.dt_txt.includes('12:00:00'));
  console.log(noon);
  
  noon.forEach (forecast => {
    let thedate = new Date(forecast.dt_txt);
    
    
  });


});