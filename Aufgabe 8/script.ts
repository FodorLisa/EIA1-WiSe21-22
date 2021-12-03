/* Funktionen Buttons*/
    window.addEventListener("load", function (): void {

        document.querySelector("#Sound1").addEventListener("mousedown", function (): void { playSample("assets/kick.mp3"); });
        document.querySelector("#Sound2").addEventListener("mousedown", function (): void { playSample("assets/hihat.mp3"); });
        document.querySelector("#Sound3").addEventListener("mousedown", function (): void { playSample("assets/snare.mp3"); });
        document.querySelector("#Sound4").addEventListener("mousedown", function (): void { playSample("assets/A.mp3"); });
        document.querySelector("#Sound5").addEventListener("mousedown", function (): void { playSample("assets/C.mp3"); });
        document.querySelector("#Sound6").addEventListener("mousedown", function (): void { playSample("assets/F.mp3"); });
        document.querySelector("#Sound7").addEventListener("mousedown", function (): void { playSample("assets/G.mp3"); });
        document.querySelector("#Sound8").addEventListener("mousedown", function (): void { playSample("assets/laugh-1.mp3"); });
        document.querySelector("#Sound9").addEventListener("mousedown", function (): void { playSample("assets/laugh-2.mp3"); });
        document.querySelector("#playB").addEventListener("click", PlayTheBeat); 
        document.querySelector("#trash").addEventListener("click", DeleteTheBeat); 
        document.querySelector("#shuffle").addEventListener("click", RemixBeat); 
    });
/* Array Sounds*/ 
    var mp3: string[] = ["assets/kick.mp3", "assets/hihat.mp3", "assets/snare.mp3", "assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/G.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3"];
    var sequence = [];
    sequence[0] = "assets/kick.mp3";
    sequence[1] = "assets/hihat.mp3";
    sequence[2] = "assets/snare.mp3";
    sequence[3] = "assets/hihat.mp3";
    var kick: number;
    var record: boolean = false;


    function playSample(mp3: string): void {
        var sound: HTMLAudioElement = new Audio(mp3);
        sound.play();
        if (record == true) {
            sequence.push(mp3);
        }
    }

    /* Funktion Play Button*/ 
    function PlayTheBeat(): void {
        var index: number = 0;
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
        function mytone(): void {
            playSample(sequence[index]);
            index += 1;
            if (index > (sequence.length - 1)) index = 0;
            console.log(sequence[index]);
        }
    }
    /* Löschen Beat */ 
    function DeleteTheBeat(): void {
        sequence.length = 0;
        console.log("Deleting beat");
    }
    /* Erstellen Remix */
    function RemixBeat(): void {
        sequence.length = 0;
        for (var i: number = 0; i < 4; i++) {
            const index: number = Math.floor(Math.random() * 8);
            console.log(index);
            playSample (mp3 [index] ); 
            console.log("Remix beat");
        };
    }


