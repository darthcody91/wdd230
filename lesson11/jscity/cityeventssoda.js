const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
        
    const towns = jsonObject['towns'];  
    //get city data for events//
    //change name of city on each JS page//
    const cityname = towns.filter((towns) => towns.name == "Soda Springs");
    let cityevents = cityname[0].events;
    let head = document.createElement('h2'); 


    //loops events//
    cityevents.forEach(event => {
    let list = document.createElement('p');
    list.innerHTML = event;
    head.appendChild(list);   
     }); 
    
    document.getElementById("eventdata").appendChild(head);
});

