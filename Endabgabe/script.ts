namespace Kartenspiel {
    //Konstanten um Karten zu erstellen
    interface Cards {
        color: string;
        values: string;
    }
    const allColor: string[] = ["B", "R", "Y", "G"];
    const allValues: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    //Leeres Array um Karten zwischenzulagern
    let allCards: Cards[] = [];

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
    let playerCards: Cards[] = [];
    let computerCards: Cards[] = [];

    //Karten werden aus Array allCards in Aray playerCards verschoben
    for (let i = 0; i < 5; i++) {
        let lastCard: Cards = allCards.pop();
        playerCards.push(lastCard);
    }
    //Karten aus Array allCards werden in computerCards Array verschoben
    for (let i = 0; i < 5; i++) {
        let lastCard: Cards = allCards.pop();
        computerCards.push(lastCard);
    }

    let openCards: Cards [] = [];
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
            let gezogeneKarte: Cards | undefined = drawCardFromStack ();
            if (gezogeneKarte) {
                playerCards.push (gezogeneKarte);
                showAllCards();
                computerTurn();
            }
        });

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
                    //console.log(playerCards[a] + " wurde geklickt");
                    let fitCards: boolean = cardFits (playerCards[a]);
                    //console.log("Karte passt zu offener Karte " + fitCards);
                    //Wenn Karte passt wird diese auf offenen Stapel gelegen und aus Spielerkartenliste entfernt
                    if (fitCards) {
                        openCards.push(playerCards[a]);

                        playerCards.splice(a, 1);

                        showAllCards();
                        //computer ist dran
                        computerTurn();
                    }
                });
            }
            if (allCards.length === 0) {
            //cardStackNewDiv.innerHTML = ""; 
            let newStack: Cards[] = openCards.splice(0, openCards.length - 1);
            allCards = shuffle(newStack);
            console.log("Stapel auffüllen")
            if (allCards.length === 0) {
                cardStackNewDiv.innerHTML = ""; 
            }
            
            if (computerCards.length === 0 || playerCards.length === 0) {
                let winnerDiv: HTMLDataElement = document.querySelector("winner");
                winnerDiv.classList.remove("hidden");
                if (computerCards.length === 0) {
                    winnerDiv.innerHTML = "Computer gewinnt";
                } else {
                    winnerDiv.innerHTML = "Spieler gewinnt";
                    }
                }
            }
        
            
        }
        //Karte erzeugen 
        function imgGeneratCards(karte: Cards): HTMLImageElement {
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
        function cardFits(playerCard: Cards): boolean {
            let valueOk: boolean = playerCard.color ===  openCards[openCards.length - 1 ].color;
            let colorOk: boolean = playerCard.values === openCards[openCards.length - 1].values;
            let OK: boolean = colorOk || valueOk;
            return OK;
        }
        function computerTurn(): void {
            //alle Computerkarten durchschauen ob eine passt
            let indexFromFitCard: number = -1;
            for (let i = 0; i < computerCards.length; i++) {
                let cardFitsPC: boolean = cardFits(computerCards[i]);
                if (cardFitsPC === true) {
                    indexFromFitCard = i;
                }
            }
            //wenn eine passt, Karte ablegen
            if (indexFromFitCard >= 0) {
                //Karte ablegen
                openCards.push(computerCards[indexFromFitCard]);
                computerCards.splice(indexFromFitCard, 1);
            } else {
                 //wenn keine passt, dann Karte ziehen
                let drawnCards: Cards | undefined = drawCardFromStack();
                if (drawnCards) {
                    computerCards.push(drawnCards);
                }
            }
            showAllCards();
            
        }
    }); 
    function drawCardFromStack(): Cards {
        //prüfen ob Karten im Stapel sind
        if (allCards.length > 0) {
        //Karte ziehen aus allCards
        let drawnCard: Cards = allCards.pop();
        //gezogene Karte wieder zurück geben
        return drawnCard;
        }
    }
    
}

