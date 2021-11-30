const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
        
        const towns = jsonObject['towns'];

        const towndata = towns.filter((towns) => towns.name === 'Soda Springs' || towns.name === 'Preston' || towns.name === 'Fish Haven');
        towndata.forEach((x) => {
        let card = document.createElement('section');
        let name= document.createElement('h2');
        let motto = document.createElement('h3');
        let yearfounded = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let image = document.createElement('img');
        

        name.innerHTML = `${x.name}`;
        motto.innerHTML = `${x.motto}`;
        yearfounded.innerHTML = `Year Founded - ${x.yearFounded}`;
        population.innerHTML = `Population - ${x.currentPopulation}`;
        rainfall.innerHTML = `Annual Rain Fall - ${x.averageRainfall}`;
        image.setAttribute('imageshome', `${x.photo}`);


        card.appendChild(name);
        card.appendChild(motto);
        card.appendChild(yearfounded);
        card.appendChild(population);
        card.appendChild(rainfall);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);

        });
    });

