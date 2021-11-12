const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        
        const prophets = jsonObject['prophets'];
        prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');
        let image = document.createElement('img');

        h2.innerHTML = `${prophet.name} <span class="highlight"> ${prophet.lastname}`;
        birthdate.innerHTML = `Born: ${prophet.birthdate}`;
        birthplace.innerHTML = `${prophet.birthplace}`;
        image.setAttribute('src', prophet.imageurl);


        card.appendChild(h2);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);

        });

    });
