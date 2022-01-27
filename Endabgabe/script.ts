namespace Kartenspiel {
    //Konstanten um Karten zu erstellen
    interface cards {
        color: string;
        values: string;
    }
    const allColor: string[] = ["B", "R", "Y", "G"];
    const allValues: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    //Leeres Array um Karten zwischenzulagern
    let allCards: cards[] = [];

    //Kartendeck erstellen
    for (let j = 0; j < allValues.length; j++) {
        for (let i = 0; i < allColor.length; i++) {
            allCards.push({color: allColor[i],
                values: allValues[j]});
    }
    }
    

    allCards = shuffle(allCards);

    //Shuffle Funktion von https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    function shuffle (array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    //Leere Arrays um Karten zwischenzulagern 
    let playerCards: cards[] = [];
    let computerCards: cards[] = [];

    //Karten werden aus Array allCards in Aray playerCards verschoben
    for (let i = 0; i < 5; i++) {
        let lastCard: cards = allCards.pop();
        playerCards.push(lastCard);
    }
    //Karten aus Array allCards werden in computerCards Array verschoben
    for (let i = 0; i < 5; i++) {
        let lastCard: cards = allCards.pop();
        computerCards.push(lastCard);
    }

    let openCards: cards [] = [];
    openCards.push(allCards.pop());

    console.log("Spielerkarten", playerCards);
    console.log("Computerkarten", computerCards);
    console.log("alleKarten", allCards);
    console.log("offene Karten", openCards);

    ///EventListener damit DOM manipuliert werden kann, nachdem Script geladen wurde wenn auf Karte geklickt wird
    window.addEventListener("load", function (): void {
        let deskPCDiv: HTMLDataElement = document.querySelector("#deskPC");
        let stapelDiv: HTMLDataElement = document.querySelector("#cardStackOld");
        let cardStackNewDiv: HTMLDataElement = document.querySelector("#cardStackNew");
        let handCardsDiv: HTMLDataElement = document.querySelector("#handCards");

        showAllCards();
        cardStackNewDiv.addEventListener("click", function (): void {
            let gezogeneKarte: cards | undefined = karteVonStapelZiehen ();
            if (gezogeneKarte) {
                playerCards.push (gezogeneKarte);
                showAllCards();
                computerTurn();
            }
        });
        //let openCardshow: HTMLImageElement = imgKartenGenerieren(openCards);
       // stapelDiv.appendChild(openCardshow);

        //stapelDiv.innerHTML = "";
        // //offene Karten anzeigen
        // var offeneKarteBild: HTMLImageElement = imgKartenGenerieren(openCards);
        // stapelDiv.appendChild(offeneKarteBild);

        function showAllCards(): void {

            stapelDiv.innerHTML = "";
            let openCardshow: HTMLImageElement = imgGeneratCards(openCards[openCards.length - 1]);
            stapelDiv.appendChild(openCardshow);

            deskPCDiv.innerHTML = "";

            // Karten für Computer erstellen und anzeigen lassen
            for (let c = 0; c < computerCards.length; c++) {
                let cardImage: HTMLImageElement = imgGeneratCards({
                    color: "card-back",
                    values: "card-back"
                });
                deskPCDiv.appendChild(cardImage);
            }
            handCardsDiv.innerHTML = "";
            //Anzeigen lassen von Karten nachdem diese gelöscht wurden
            for (let a = 0; a < playerCards.length; a++) {
                let playerCard: HTMLImageElement = imgGeneratCards(playerCards[a]);
                handCardsDiv.appendChild(playerCard);
                playerCard.addEventListener("click", function (): void {
                    console.log(playerCards[a] + " wurde geklickt");
                    let fitCards: boolean = cardFits (playerCards[a]);
                    console.log("Karte passt zu offener Karte " + fitCards);
                    //Wenn Karte passt wird diese auf offenen Stapel gelegen und aus Spielerkartenliste entfernt
                    if (fitCards) {
                        openCards.push(playerCards[a]);
                        console.log("offene Karte " + openCards);

                        playerCards.splice(a, 1);
                        console.log("spieler Karten " + playerCards);

                        showAllCards();
                        //computer ist dran
                        computerTurn();
                    }
                });
            }
            if (allCards.length === 0) {
            //cardStackNewDiv.innerHTML = ""; 
            let neuerKartenstapel: cards = openCards.splice(0, openCards.length - 1);
            allCards = shuffle(neuerKartenstapel);
            console.log(allCards);
        }
            
        }
        //Karte erzeugen 
        function imgGeneratCards(karte: cards): HTMLImageElement {
            let newCard: HTMLImageElement = new Image();
            newCard.className = "cards";
            if (karte.values === "card-back") {
                newCard.src = "./cards/card-back.png";
            } else {
                newCard.src = "./cards/" + karte.values + "-" + karte.color + ".png";
            }
            
            return newCard;
        }
        //Funktion um gegebene Karten mit offener Karte zu vergleichen 
        function cardFits(spielerKarte: cards): boolean {
           // openCardsplit: string[] = openCards[openCards.length - 1].split("-");
           // let cardNameSplit: string[] = kartenName.split("-");
            let valueOk: boolean = spielerKarte.color ===  openCards[openCards.length - 1 ].color;
            let colorOk: boolean = spielerKarte.values === openCards[openCards.length - 1].values;
            let OK: boolean = colorOk || valueOk;
            return OK;
        }
        function computerTurn(): void {
            //alle Computerkarten durchschauen ob eine passt
            let indexVonPassenderKarte: number = -1;
            for (let i = 0; i < computerCards.length; i++) {
                let cardFitsPC: boolean = cardFits(computerCards[i]);
                if (cardFitsPC === true) {
                    indexVonPassenderKarte = i;
                }
            }
            //wenn eine passt, Karte ablegen
            if (indexVonPassenderKarte >= 0) {
                //Karte ablegen
                openCards.push(computerCards[indexVonPassenderKarte]);
                computerCards.splice(indexVonPassenderKarte, 1);
            } else {
                let gezogeneKarte : cards | undefined = karteVonStapelZiehen();
                if(gezogeneKarte) {
                    computerCards.push(gezogeneKarte);
                }
            }
            //wenn keine passt, dann Karte ziehen
            showAllCards();
            
        }
    }); 
    function karteVonStapelZiehen(): cards {
        //prüfen ob Karten im Stapel sind
        if (allCards.length > 0) {
        //Karte ziehen aus allCards
        let gezogeneKarte: cards = allCards.pop();
        //gezogene Karte wieder zurück geben
        return gezogeneKarte;
        }
    }
    
}

