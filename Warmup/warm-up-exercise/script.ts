var colors: string[] = ["rgb(1,88,224)", "#ff0088", "yellow", "rgba(0,0,100,0.5)"]

var key:number = 0;

function colorchange(){
  document.querySelector("#ButtonA").style.background = colors[key];
  key++; 
}

window.addEventListener('load', function(){
document.querySelector('#buttonA').addEventListener('click', colorchange)
})


document.querySelector("#Sound1").addEventListener("mousedown", function(){playSample("assets/kick.mp3");});
document.querySelector("#Sound2").addEventListener("mousedown", function(){playSample("assets/hihat.mp3");});
document.querySelector("#Sound3").addEventListener("mousedown", function(){playSample("assets/snare.mp3");});
document.querySelector("#Sound4").addEventListener("mousedown", function(){playSample("assets/A.mp3");});
document.querySelector("#Sound5").addEventListener("mousedown", function(){playSample("assets/C.mp3");});
document.querySelector("#Sound6").addEventListener("mousedown", function(){playSample("assets/F.mp3");});
document.querySelector("#Sound7").addEventListener("mousedown", function(){playSample("assets/G.mp3");});
document.querySelector("#Sound8").addEventListener("mousedown", function(){playSample("assets/laugh-1.mp3");});
document.querySelector("#Sound9").addEventListener("mousedown", function(){playSample("assets/laugh-2.mp3");});
document.querySelector("#PlayButton").addEventListener("click", Play)});
setInterval(function machine_single() {
    drumMachine[drumPlaying].play();
    drumPlaying += 1;
    if (drumPlaying > 3)
        drumPlaying = 0;
}, 500);

function playSample(samples: string): void{
var sound:HTMLAudioElement = new Audio(samples);
sound.play();};