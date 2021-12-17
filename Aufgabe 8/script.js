var Aufgabe8;
(function (Aufgabe8) {
    /* Funktionen Buttons*/
    window.addEventListener("load", function () {
        document.querySelector("#Sound1").addEventListener("mousedown", function () { playSample("assets/kick.mp3"); });
        document.querySelector("#Sound2").addEventListener("mousedown", function () { playSample("assets/hihat.mp3"); });
        document.querySelector("#Sound3").addEventListener("mousedown", function () { playSample("assets/snare.mp3"); });
        document.querySelector("#Sound4").addEventListener("mousedown", function () { playSample("assets/A.mp3"); });
        document.querySelector("#Sound5").addEventListener("mousedown", function () { playSample("assets/C.mp3"); });
        document.querySelector("#Sound6").addEventListener("mousedown", function () { playSample("assets/F.mp3"); });
        document.querySelector("#Sound7").addEventListener("mousedown", function () { playSample("assets/G.mp3"); });
        document.querySelector("#Sound8").addEventListener("mousedown", function () { playSample("assets/laugh-1.mp3"); });
        document.querySelector("#Sound9").addEventListener("mousedown", function () { playSample("assets/laugh-2.mp3"); });
        document.querySelector("#playB").addEventListener("click", PlayTheBeat);
        document.querySelector("#trash").addEventListener("click", DeleteTheBeat);
        document.querySelector("#shuffle").addEventListener("click", RemixBeat);
    });
    /* Array Sounds*/
    var mp3 = ["assets/kick.mp3", "assets/hihat.mp3", "assets/snare.mp3", "assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/G.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3"];
    var sequence = [];
    sequence[0] = "assets/kick.mp3";
    sequence[1] = "assets/hihat.mp3";
    sequence[2] = "assets/snare.mp3";
    sequence[3] = "assets/hihat.mp3";
    var kick;
    var record = false;
    function playSample(mp3) {
        var sound = new Audio(mp3);
        sound.play();
        if (record == true) {
            sequence.push(mp3);
        }
    }
    /* Funktion Play Button*/
    function PlayTheBeat() {
        var index = 0;
        if (document.getElementById("playB").classList.contains("fa-play-circle")) {
            document.getElementById("playB").classList.remove("fa-play-circle");
            document.getElementById("playB").classList.add("fa-stop-circle");
            kick = setInterval(mytone, 300);
            record = false;
            console.log("Play");
        }
        /* Stop Funktion */
        else {
            document.getElementById("playB").classList.remove("fa-stop-circle");
            document.getElementById("playB").classList.add("fa-play-circle");
            clearInterval(kick);
            console.log("Pause");
        }
        /* Abspielen Play Button */
        function mytone() {
            playSample(sequence[index]);
            index += 1;
            if (index > (sequence.length - 1))
                index = 0;
            console.log(sequence[index]);
        }
    }
    /* Löschen Beat */
    function DeleteTheBeat() {
        sequence.length = 0;
        console.log("Deleting beat");
    }
    /* Erstellen Remix */
    /* Achtung! Remix Button funktioniert nur wenn man erst auf den Remix Button geht und anschließend den Play Button drückt*/
    function RemixBeat() {
        sequence = [];
        for (var i = 0; i < 4; i++) {
            const index = Math.floor(Math.random() * mp3.length);
            sequence.push(mp3[index]);
        }
        ;
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=script.js.map