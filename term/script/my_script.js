var year = 0;
var ifConnected = window.navigator.onLine;
if (ifConnected)
{} 
else {
  alert('Connection not available');
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("changetxt").innerHTML = "click on the close button";
  document.getElementsByTagName(img).style.opacity = "0.3";
  document.getElementsByClassName("heading_index").style.opacity = "0.3";
  document.getElementsByTagName(footer).style.opacity = "0.3";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("changetxt").innerHTML = "click on the open button to see what I can do next";
  document.getElementsByTagName(img).style.opacity = "1";
  document.getElementsByClassName("heading_index").style.opacity = "1";
  document.getElementsByTagName("footer").style.opacity = "1";
  
}

function check() {
  var name = "";
  var password = "";
  name = myform.uname.value;
  password = myform.psw.value;
  if(name == password) {
    window.location = "index.html";
  }
  else {
  }
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
		'X-RapidAPI-Key': 'af84e5a5b7msh2a16bae9a79e039p1a6b97jsn04167913c0a5'
	}
};

function one(){
  year = 2021;
fetch('https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=140&season=2021&team=529', options)
	.then(data => data.json())
	.then(data => generateHtml(data))
}

function two(){
  year = 2020;
  fetch('https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=140&season=2020&team=529', options)
    .then(data => data.json())
    .then(data => generateHtml(data))
  }

function three(){
  year = 2019;
  fetch('https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=140&season=2019&team=529', options)
    .then(data => data.json())
    .then(data => generateHtml(data))
}

function four(){
  year = 2018;
  fetch('https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=140&season=2018&team=529', options)
    .then(data => data.json())
    .then(data => generateHtml(data))
  }

const generateHtml = (data) => {
    console.log(data)
    const fixtures = `
    <div class="tr">
      <div class="td">Fixtures</div>
      <div class="td">W: ${data.response.fixtures.wins.total} D: ${data.response.fixtures.draws.total} L:${data.response.fixtures.loses.total}</div>
    </div>
    `
    const goals = `
    <div class="tr">
      <div class="td">Goals</div>
      <div class="td">For: ${data.response.goals.for.total.total} Against: ${data.response.goals.against.total.total}</div>
    </div>
    `
    const clean_sheets = `
    <div class="tr">
      <div class="td">Clean Sheets</div>
      <div class="td">Home: ${data.response.clean_sheet.home} Away: ${data.response.clean_sheet.away}</div>
    </div>
    `
    const penalty = `
    <div class="tr">
      <div class="td">Penalties</div>
      <div class="td">Scored: ${data.response.penalty.scored.total} Missed: ${data.response.penalty.missed.total}</div>
    </div>
    `
    const fails = `
    <div class="tr">
      <div class="td">Failed To Score</div>
      <div class="td">Home: ${data.response.failed_to_score.home} Away: ${data.response.failed_to_score.away}</div>
    </div>
    `
    
    const button = document.querySelector('.dropbtn')
    const footballDiv1 = document.querySelector('.t_value_1')
    const footballDiv2 = document.querySelector('.t_value_2')
    const footballDiv3 = document.querySelector('.t_value_3')
    const footballDiv4 = document.querySelector('.t_value_4')
    const footballDiv5 = document.querySelector('.t_value_5')
    button.innerHTML = "Select Desired Season: " + year
    footballDiv1.innerHTML = fixtures
    footballDiv2.innerHTML = goals
    footballDiv3.innerHTML = clean_sheets
    footballDiv4.innerHTML = penalty
    footballDiv5.innerHTML = fails
    
}