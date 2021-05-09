let m = 0;
let y;
var audio;
function start() {
    y = setInterval(run, 100);
    function run() {
        if (m == 1385) {
            clearInterval(x);
            m = 0;
        }
        else {
            m += 5;
            var x = document.getElementById("img");
            x.style.marginLeft = m + 'px';

        }    
    }
}
function stop() {
    clearInterval(y);
}
audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.volume = 0.5;
audio.loop = true;
function runAudio() {
    audio.play();
}
function stopAudio() {
    audio.pause();
}



