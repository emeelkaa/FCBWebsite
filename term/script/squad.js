const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
		'X-RapidAPI-Key': 'af84e5a5b7msh2a16bae9a79e039p1a6b97jsn04167913c0a5'
	}
};

let cardsContainer;
document.addEventListener("DOMContentLoaded", function() {
    cardsContainer = document.querySelector(".container");
    fetchPlayers();
});

function setCard(element, attributes) {
    for(let key in attributes) {
        element.setAttribute(key, attributes[key])
    };
};

function fetchPlayers() {   
    fetch('https://api-football-v1.p.rapidapi.com/v3/players/squads?team=529', options)
    .then((Response) => Response.json())
    .then((PlayerData) => getPlayerData(PlayerData.response[0].players));
};

function getPlayerData(PlayerData) {
    PlayerData.forEach((player) => {
        createPlayerCard(player);
    });
};


function createPlayerCard(player) {
    const card = document.createElement("div");
    setCard(card, {"id": player.id, "class": "card"});
    const html = `
    <div class="player_card">
    <div class="title_content">
        <img src="${player.photo}" alt="${player.name}-image">
        <br>
        <h1 class>${player.name}</h1>
    </div>
        <div class="player_info">
            <ul>
                <li>Age: ${player.age}</li>
                <li>Number: ${player.number}</li>
                <li>Position: ${player.position}</li>
            </ul>
        </div>
    </div>    
	`;
    card.innerHTML = html;
	cardsContainer.appendChild(card);
};