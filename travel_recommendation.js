const searchBtn = document.getElementById('searchBtn');
const input = document.getElementById('input').value;
const clearBtn = document.getElementById('clearBtn');
    const apiUrl = './travel_recommendation_api.json';


function getApi () {

    fetch(apiUrl).then((response) => response.json())
                .then((data) => {
            const recContainer = document.getElementById('recContainer');
            if (input.toLowerCase() === 'beaches' || 'beach'){
            const dataHTML = data.map((places)=> {
            `<img src='${places.beaches.img}>
             <h3>${places.beaches.name}</h3>
             <p>${places.beaches.description}</p>
             <button>Visit</button>`
             recContainer.innerHTML = dataHTML;
        })
                }})
}

searchBtn.addEventListener('click', getApi)
    
// getApi();