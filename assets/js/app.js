let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function() {
    if(httpRequest.readyState === 4) {
        var results = JSON.parse(httpRequest.responseText);
        document.getElementById('nbPlayers').innerHTML = results["onlinePlayers"];
    };

};
httpRequest.open('GET', "https://api.mineaurion.com/query/online-players", true);
httpRequest.send();

let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function() {
    if(httpRequest.readyState === 4) {
        var results = JSON.parse(httpRequest.responseText);
        document.getElementById('nbPlayers').innerHTML = results["onlinePlayers"];
    };

};
httpRequest.open('GET', "https://api.mineaurion.com/query/online-players", true);
httpRequest.send();






// GO TO LAUNCHER LINKS
let btn = document.getElementById("hero-btn");
let target = document.getElementById("launcher");

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