serversList = document.getElementById('statut-servers-list');
serverTitle = document.getElementsByClassName('statut-server-title')[0];
serverIp = document.getElementsByClassName('server-ip')[0];
serverVersion = document.getElementsByClassName('server-version')[0];
serverNrbsPlayers = document.getElementsByClassName('server-players')[0];
serversMaxPlayers = document.getElementsByClassName('server-maxplayers')[0];
serverState = document.getElementsByClassName('stateServer')[0];
urlApi = "https://api.mineaurion.com/query";

fetch(urlApi).then(res => 
    res.json().then(data => {
        console.log(data);
        for(let server of data){
            resTitle += server.name
        }
        var resTitle;
        serverTitle.innerHTML = resTitle;
    }))