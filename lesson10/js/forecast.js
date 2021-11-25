

const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=55fabb0529e11ab638f2e68f25e2cb38&units=imperial";
fetch(forecastURL)
  .then((response) => response.json())
  .then(data => {
 
  
  const noon = data.list.filter(x => x.dt_txt.includes('12:00:00'));
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date(data.list[0] * 1000);
  const weekday = days[d.getDay()]; //this is where the days from the json goes --- figure out how to loop the date//
    console.log(weekday)
  

    

  
    noon.forEach(x => {
    let card = document.createElement('section') 
    let day = document.createElement('h3');
    let temp = document.createElement('p');
    let desc = document.createElement('p');
  
    

    day.innerHTML = `${x.dt_txt}`;
    temp.innerHTML = `${x.main.temp} °F`;
    desc.innerHTML = `${x.weather[0].description}`.toUpperCase(); 
      

   

 
    

    card.appendChild(day);
    card.appendChild(temp);
    card.appendChild(desc);
   
   

    document.querySelector('div.cards').appendChild(card);
  });

       
});