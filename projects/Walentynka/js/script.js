var song = document.getElementById("song");
var bttn = document.getElementById("bttn");

bttn.onclick = function(){
    if(song.paused){
        song.play();
        bttn.src = "img/hert2.png"
    }else{
        song.pause();
        bttn.src = "img/hert1.png"
    }
}

const body = document.querySelector('body');
const btn = document.querySelector('button');

const colorchanger = () => {
    if(body.getAttribute('data-mode') === 'one') {
        body.setAttribute('data-mode', 'two')
    } else {
        body.setAttribute('data-mode', 'one')
    }
}

btn.addEventListener('click', colorchanger)