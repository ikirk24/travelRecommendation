const searchBtn = document.getElementById('searchBtn');
const input = document.getElementById('input');
const clearBtn = document.getElementById('clearBtn');
const recContainer = document.getElementById('recContainer');
const apiUrl = './travel_recommendation_api.json';


function getApi () {
    fetch(apiUrl).then((response) => response.json())
                .then((data) => {
                    let inputWord = input.value.toLowerCase();
                    
                    if (inputWord === 'beaches' || 'beach' ){
                    const beachData = data.beaches.map(item => 
                        `<div class="container">
                        <img src='${item.imageUrl}'>
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <button>Visit</button>
                        </div><br> `)
                    recContainer.innerHTML = beachData.join('');
                    console.log(inputWord)

                 } else if (inputWord === 'temples' || 'temple'){
                    
                    const templeData = data.temples.map(item => 
                        `<div class="container">
                        <img src='${item.imageUrl}'>
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <button>Visit</button>
                        </div><br> `)
                        recContainer.innerHTML = templeData.join('');
                        return;
                 }
                
 })
}


function inputTest() {
    console.log(input.value);
}
searchBtn.addEventListener('click', getApi)
// getApi();


        //     if (input.toLowerCase() === 'beaches' || 'beach'){
        //     const dataHTML = data.map((places)=> {
        //     `<img src='${places.beaches.img}>
        //      <h3>${places.beaches.name}</h3>
        //      <p>${places.beaches.description}</p>
        //      <button>Visit</button>`
        //      recContainer.innerHTML = dataHTML;
        // })
        //         }