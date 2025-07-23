const searchBtn = document.getElementById('searchBtn');
const input = document.getElementById('input').value;
const clearBtn = document.getElementById('clearBtn');
const recContainer = document.getElementById('recContainer');

function getApi () {
    const apiUrl = './travel_recommendation_api.json';

    fetch(apiUrl).then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
}

function showRec(keyWord) {
    
}
getApi();