const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const apiUrl = './travel_recommendation_api.json';
const recContainer = document.getElementById('recContainer');
const inputSpot = document.getElementById('input');
    


function getApi () {
    fetch(apiUrl).then((response) => response.json())
                .then((data) => {

              const input = document.getElementById('input').value;

                    const beachData = data.beaches.map(item => 
                        `<div class="container">
                        <img src='${item.imageUrl}'>
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <button>Visit</button>
                        </div><br> `);


                    const templeData = data.temples.map(item => 
                        `<div class="container">
                        <img src='${item.imageUrl}'>
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <button>Visit</button>
                        </div><br> `)

                    const countryData = data.countries.map(item => 
                        item.cities.map(country => 
                            
                            `<div class="container">
                            <img src='${country.imageUrl}'>
                            <h3>${country.name}</h3>
                            <p>${country.description}</p>
                            <button>Visit</button>
                                </div><br> `))


                        

                    if (input.toLowerCase() === 'beach' || input.toLowerCase() === 'beaches') {
                        recContainer.innerHTML = beachData;
                    } else if (input.toLowerCase() === 'temple' || input.toLowerCase() === 'temples'){
                        recContainer.innerHTML = templeData; 
                    } else if (input.toLowerCase() === 'country' || input.toLowerCase() === 'countries'){
                        recContainer.innerHTML = countryData;
                    } else {
                        alert("Search 'Beaches', 'Temples', or 'Countries'");
                    }
                     document.getElementById('input').value = '';

                    
                            
            }
            )

}

function clear () {
    recContainer.innerHTML = '';
    document.getElementById('input').value = '';


}

clearBtn.addEventListener('click', clear);
searchBtn.addEventListener('click', getApi);
inputSpot.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        getApi();
    }

} )