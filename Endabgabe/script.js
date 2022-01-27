var Kartenspiel;
(function (Kartenspiel) {
    const allColor = ["B", "R", "Y", "G"];
    const allValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    //Leeres Array um Karten zwischenzulagern
    let allCards = [];
    //Kartendeck erstellen
    for (let j = 0; j < allValues.length; j++) {
        for (let i = 0; i < allColor.length; i++) {
            allCards.push({ color: allColor[i],
                values: allValues[j] });
        }
    }
    allCards = shuffle(allCards);
    //Shuffle Funktion von https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }
        return array;
    }
    //Leere Arrays um Karten zwischenzulagern 
    let playerCards = [];
    let computerCards = [];
    //Karten werden aus Array allCards in Aray playerCards verschoben
    for (let i = 0; i < 5; i++) {
        let lastCard = allCards.pop();
        playerCards.push(lastCard);
    }
    //Karten aus Array allCards werden in computerCards Array verschoben
    for (let i = 0; i < 5; i++) {
        let lastCard = allCards.pop();
        computerCards.push(lastCard);
    }
    let openCards = [];
    openCards.push(allCards.pop());
    console.log("Spielerkarten", playerCards);
    console.log("Computerkarten", computerCards);
    console.log("alleKarten", allCards);
    console.log("offene Karten", openCards);
    ///EventListener damit DOM manipuliert werden kann, nachdem Script geladen wurde wenn auf Karte geklickt wird
    window.addEventListener("load", function () {
        let deskPCDiv = document.querySelector("#deskPC");
        let stapelDiv = document.querySelector("#cardStackOld");
        let cardStackNewDiv = document.querySelector("#cardStackNew");
        let handCardsDiv = document.querySelector("#handCards");
        showAllCards();
        cardStackNewDiv.addEventListener("click", function () {
            let gezogeneKarte = karteVonStapelZiehen();
            if (gezogeneKarte) {
                playerCards.push(gezogeneKarte);
                showAllCards();
            }
            //let openCardshow: HTMLImageElement = imgKartenGenerieren(openCards);
            // stapelDiv.appendChild(openCardshow);
            //stapelDiv.innerHTML = "";
            // //offene Karten anzeigen
            // var offeneKarteBild: HTMLImageElement = imgKartenGenerieren(openCards);
            // stapelDiv.appendChild(offeneKarteBild);
            function showAllCards() {
                stapelDiv.innerHTML = "";
                let openCardshow = imgGeneratCards(openCards[openCards.length - 1]);
                stapelDiv.appendChild(openCardshow);
                deskPCDiv.innerHTML = "";
                // Karten für Computer erstellen und anzeigen lassen
                for (let c = 0; c < computerCards.length; c++) {
                    let cardImage = imgGeneratCards({
                        color: "card-back",
                        values: "card-back"
                    });
                    deskPCDiv.appendChild(cardImage);
                }
                handCardsDiv.innerHTML = "";
                //Anzeigen lassen von Karten nachdem diese gelöscht wurden
                for (let a = 0; a < playerCards.length; a++) {
                    let playerCard = imgGeneratCards(playerCards[a]);
                    handCardsDiv.appendChild(playerCard);
                    playerCard.addEventListener("click", function () {
                        console.log(playerCards[a] + " wurde geklickt");
                        let fitCards = cardFits(playerCards[a]);
                        console.log("Karte passt zu offener Karte " + fitCards);
                        //Wenn Karte passt wird diese auf offenen Stapel gelegen und aus Spielerkartenliste entfernt
                        if (fitCards) {
                            openCards.push(playerCards[a]);
                            console.log("offene Karte " + openCards);
                            playerCards.splice(a, 1);
                            console.log("spieler Karten " + playerCards);
                            showAllCards();
                        }
                    });
                }
            }
        });
    }
    //Karte erzeugen 
    , 
    //Karte erzeugen 
    function imgGeneratCards(karte) {
        let newCard = new Image();
        newCard.className = "cards";
        if (karte.values === "card-back") {
            newCard.src = "./cards/card-back.png";
        }
        else {
            newCard.src = "./cards/" + karte.values + "-" + karte.color + ".png";
        }
        return newCard;
    }
    //Funktion um gegebene Karten mit offener Karte zu vergleichen 
    , 
    //Funktion um gegebene Karten mit offener Karte zu vergleichen 
    function cardFits(spielerKarte) {
        // openCardsplit: string[] = openCards[openCards.length - 1].split("-");
        // let cardNameSplit: string[] = kartenName.split("-");
        let valueOk = spielerKarte.color === openCards[openCards.length - 1].color;
        let colorOk = spielerKarte.values === openCards[openCards.length - 1].values;
        let OK = colorOk || valueOk;
        return OK;
    });
})(Kartenspiel || (Kartenspiel = {}));
;
function karteVonStapelZiehen() {
    //prüfen ob Karten im Stapel sind
    if (allCards.length > 0) {
        //Karte ziehen aus allCards
        let gezogeneKarte = allCards.pop();
        //gezogene Karte wieder zurück geben
        return gezogeneKarte;
    }
}
//# sourceMappingURL=script.js.map