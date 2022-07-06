// @ts-nocheck
// GET ONLINE PLAYERS
let httpRequest = new XMLHttpRequest();
let nbPlayers = document.getElementById('nbPlayers')
let refresh = setInterval(onlinePlayers, 3000);
nbPlayers.innerHTML = 'chargement...';
function onlinePlayers(){
    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState === 4) {
            var results = JSON.parse(httpRequest.responseText);
            nbPlayers.innerHTML = results["onlinePlayers"];
        };
    };
    httpRequest.open('GET', "https://api.mineaurion.com/query/online-players", true);
    httpRequest.send();
};

// END GET ONLINE PLAYERS 

// GO TO LAUNCHER LINKS
let btn = document.getElementsByClassName("hero-btn")[0];
let target = document.getElementsByClassName("launcher")[0];

btn.addEventListener('click', function(){
    target.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
    });
});
// END GO TO LAUNCHER LINKS

// GO TO THE TOP
document.querySelector("#footer-arrow").addEventListener('click', function(){
    window.scroll({
        top : 0,
        behavior: 'smooth'
    });
});
// END GO TO THE TOP 

// LIST SERVERS

