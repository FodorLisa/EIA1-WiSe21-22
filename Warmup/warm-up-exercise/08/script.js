var names = ["Ben", "Ella", "Emil", "Emilia", "Emma", "Finn", "Hannah", "Lea", "Leon", "Lina", "Louis", "Luca", "Marie", "Matteo", "Mia", "Mila", "Noah", "Paul", "Sophia", "Theo"];
window.addEventListener("load", function () {
    document.querySelector("p span").innerHTML = names.length + "";
    document.querySelector("#buttonAufsteigend").addEventListener("click", buttonAufsteigendClicked);
    document.querySelector("#buttonAbsteigend").addEventListener("click", buttonAbsteigendClicked);
    document.querySelector("#buttonAlleAusser").addEventListener("click", buttonAlleAusserClicked);
});
function buttonAufsteigendClicked() {
    for (var index = 0; index < names.length; index++) {
        document.querySelector("#liste").innerHTML += "<p>" + names[index] + "</p>";
    }
}
/* Schleife runterzählen!!! */
function buttonAbsteigendClicked() {
    for (var index = names.length - 1; index >= 0; index--) {
        document.querySelector("#liste").innerHTML += "<p>" + names[index] + "</p>";
    }
}
function buttonAlleAusserClicked() {
    for (var index = 0; index < names.length; index++) {
        if (names[index] != "Lea" && names[index] != "Paul") {
            document.querySelector("#liste").innerHTML += "<p>" + names[index] + "</p>";
        }
    }
}
/* Funktion Play Button mit Array*/
function Play() {
    var kick = setInterval(party, 280);
    var Beat = ["assets/kick.mp3", "assets/hihat.mp3", "assets/snare.mp3", "assets/hihat.mp3",];
    var index = 0;
    function party() {
        var sequence = new Audio(Beat[index]);
        sequence.play();
        index += 1;
        if (index > 3)
            index = 0;
        console.log("Play");
    }
    {
        document;
    }
}
;
/* Stop Funktion */
function PlayTheBeat() {
    var index = 0;
    if (document.getElementById("Play").classList.contains("fa-play")) {
        document.getElementById("Play").classList.remove("fa-play");
        document.getElementById("Play").classList.add("fa-pause");
        kick = setInterval(mytone, 300);
        record = false;
        console.log("Play");
    }
    else {
        document.getElementById("Play").classList.remove("fa-pause");
        document.getElementById("Play").classList.add("fa-play");
        clearInterval(kick);
        console.log("Pause");
    }
    function mytone() {
        playSample(sequence[index]);
        index += 1;
        if (index > (sequence.length - 1))
            index = 0;
        console.log(sequence[index]);
    }
}
function playSample(samples) {
    var sound = new Audio(samples);
    sound.play();
}
;
/* Funktion Play Button mit Array*/
function Play() {
    var kick = setInterval(party, 280);
    var Beat = ["assets/kick.mp3", "assets/hihat.mp3", "assets/snare.mp3", "assets/hihat.mp3",];
    var index = 0;
    function party() {
        var sequence = new Audio(Beat[index]);
        sequence.play();
        index += 1;
        if (index > 3)
            index = 0;
        console.log("Play");
    }
}
;
//# sourceMappingURL=script.js.map