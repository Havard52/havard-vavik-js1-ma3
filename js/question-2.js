// Answer 2

const  apiKey = "3e9f1865dc334b67a5a8ff36538150e6";
const url =  `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const gamesContainer = document.querySelector(".gamesContainer");


async function apiCall() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        const gameFacts = results.results;

        gamesContainer.innerHTML = "";

        for (let i = 0; i < gameFacts.length; i++ ){
            gamesContainer.innerHTML += 
            `
            <div class="gameBox">
            <h2>${gameFacts[i].name}</h2>
            <p>Rating: ${gameFacts[i].rating}</p>
            <p>Tags: ${gameFacts[i].tags.length}</p>
            </div>
            `
       
        if (i === 7){
            break;
        }}
    } 
    
    catch (error) {
        console.log(error);
        gamesContainer.innerHTML = alert("Sorry, something went wrong 😔", error);
    }
};

apiCall();