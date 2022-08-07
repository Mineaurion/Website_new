// GO TO LAUNCHER LINKS

let btn = document.getElementsByClassName("hero-btn")[0];
let target = document.getElementsByClassName("launcher")[0];
if(btn && target) {
    btn.addEventListener('click', function(){
        target.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        });
    });
};
// END GO TO LAUNCHER LINKS
console.log(target);
// GO TO SERVERS LIST
let btnServer = document.getElementsByClassName("servers-link")[0];
let targetServer = document.getElementsByClassName("servers-list")[0];
if(btnServer && targetServer) {
    btnServer.addEventListener('click', (e) => {
        e.preventDefault() //here
        targetServer.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        });
    });
};
console.log(targetServer);
// END GO TO SERVERS LIST
// GO TO THE TOP
document.querySelector(".footer-arrow").addEventListener('click', function(){
    window.scroll({
        top : 0,
        behavior: 'smooth'
    });
});
// END GO TO THE TOP 



// GET ONLINE PLAYERS
let httpRequest = new XMLHttpRequest();
let nbPlayers = document.getElementById('nbPlayers')
let refresh = setInterval(onlinePlayers, 3000);
function onlinePlayers(){
    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState === 4) {
            var results = JSON.parse(httpRequest.responseText);
            nbPlayers.innerHTML = results["onlinePlayers"];
        };
        setTimeout(()=>{ refresh}), 3000;
    };
    httpRequest.open('GET', "https://api.mineaurion.com/query/online-players", true);
    httpRequest.send();
};

// END GET ONLINE PLAYERS


// STATUT PLAYERS LIST
const serveursFetch = () => {
    const serverContainer = document.getElementById('statut-servers-list');
    serverContainer.innerHTML = "";
    fetch('https://api.mineaurion.com/query')
      .then( response => {
        response.json()
          .then( servers => {
            let index = 0;
            let id = index;
            servers.forEach( server => {
              const css = server.status ? "green" : "red";
              const stateServer = server.status ? "Allumé" : "Éteint";
              let playersList = "";
                id = index;
                html = '<div class="statut-server" id="'+ id + '"></div>'
                serverContainer.innerHTML += html;
              server.players.forEach( player => {
                playersList += '<a class="playerhead" title="'+ player +'"><img src="https://cravatar.eu/avatar/'+ player +'/30"/></a>';
              })
              let badge = " ";
              if(server.access.beta){
                badge += '<span class="badge">Beta</span>'
              }
              if(server.access.paying){
                badge += '<a href="http://shop.mineaurion.com/category/acces-aux-serveurs" title="Accéder à la boutique" target="_blank" class="badge">Payant</a>'
              }
              if(server.access.donator){
                badge += '<a href="http://shop.mineaurion.com/category/726483" title="Accéder à la boutique" target="_blank" class="badge">Donateur</a>'
              }
              html =  '<div class="statut-server-title">'+ server.name + badge + '</div>' +
                        '<div class="statut-server-infos">'+
                            '<p>Adresse : '+ server.dns +'</p>' +
                            '<p>Version : '+ server.version.modpack +'</p>' +
                            '<p>Joueur(s) : '+ server.onlinePlayers +'/'+ server.maxPlayers +'</p>' +
                            '<p>Statut : <span class="'+ css +'">'+ stateServer +'</span></p>' +
                            '<p>Joueur(s) en ligne : </p>' + playersList +
                        '</div>';
              document.getElementById(id).innerHTML += html;
              index++;
            })
          })
          .catch( error => console.error("Api doesn't send a json", error))
      })
      .catch( error => console.error("Error when fetching the server", error))
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    serveursFetch();
    setInterval(function () {
      serveursFetch();
    }, 30000);
  })
//END STATUT PLAYERS LIST