// STATUT PLAYERS LIST
const serveursFetch = () => {
    const serverContainer = document.getElementById('statut-servers-list');
    serverContainer.innerHTML = "";
    fetch('https://api.mineaurion.com/query')
      .then( response => {
        response.json()
          .then( serveurs => {
            let index = 0;
            let id = index;
            serveurs.forEach( serveur => {
              const css = serveur.status ? "vert" : "rouge";
              const status = serveur.status ? "Allumé" : "Éteint";
              let htmlJoueurs = "";
                id = index;
                html = '<div class="statut-server" id="'+ id + '"></div>'
                serverContainer.innerHTML += html;
              serveur.players.forEach( player => {
                htmlJoueurs += '<a class="playerhead" title="'+ player +'"><img src="https://cravatar.eu/avatar/'+ player +'/30"/></a>';
              })
              let badge = " ";
              if(serveur.access.beta){
                badge += '<span class="badge">Beta</span>'
              }
              if(serveur.access.paying){
                badge += '<span class="badge">Payant</span>'
              }
              if(serveur.access.donator){
                badge += '<span class="badge">Donateur</span>'
              }
              html =  '<div class="statut-server-title">'+ serveur.name + badge + '</div>' +
                        '<div class="statut-server-infos">'+
                            '<p>Adresse : '+ serveur.dns +'</p>' +
                            '<p>Version : '+ serveur.version.modpack +'</p>' +
                            '<p>Joueur(s) : '+ serveur.onlinePlayers +'/'+ serveur.maxPlayers +'</p>' +
                            '<p>Statut : <span class="'+ css +'">'+ status +'</span></p>' +
                            '<p>Horaires redémarrage</p>' +
                            '<p>Joueur(s) en ligne : </p>' +
                            
                            htmlJoueurs +
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