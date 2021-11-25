/* Array */
var sound = [new Audio("./assets/kick.mp3"), new Audio("./assets/snare.mp3"), new Audio("./assets/hihat.mp3"), new Audio("./assets/A.mp3"), new Audio("./assets/C.mp3"), new Audio("./assets/F.mp3"), new Audio("./assets/G.mp3"), new Audio("./assets/laugh-1.mp3"), new Audio("./assets/laugh-2.mp3")];
/* zentrale Funktion: playSample */
window.addEventListener("load", function playSample() {
    document.querySelector(".button1").addEventListener("click", function () { (sound[0]).play(); }); /* Knopfbelegung Anfang */
    document.querySelector(".button2").addEventListener("click", function () { (sound[1]).play(); });
    document.querySelector(".button3").addEventListener("click", function () { (sound[2]).play(); });
    document.querySelector(".button4").addEventListener("click", function () { (sound[3]).play(); });
    document.querySelector(".button5").addEventListener("click", function () { (sound[4]).play(); });
    document.querySelector(".button6").addEventListener("click", function () { (sound[5]).play(); });
    document.querySelector(".button7").addEventListener("click", function () { (sound[6]).play(); });
    document.querySelector(".button8").addEventListener("click", function () { (sound[7]).play(); });
    document.querySelector(".button9").addEventListener("click", function () { (sound[8]).play(); }); /* Knopfbelegung Ende */
    document.querySelector(".play").addEventListener("click", function beat() {
        /* kontinuierliches Ausführen einer Anweisung" */
        setInterval(function () {
            sound[0].play();
        }, 500);
        setInterval(function () {
            sound[1].play();
        }, 1000);
        setInterval(function () {
            sound[2].play();
        }, 1500);
    });
});




