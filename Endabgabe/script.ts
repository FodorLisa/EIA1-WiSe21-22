namespace Kartenspiel_FodorLisa {
    //Interface zur Erstellung der Karten
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
    //alle Karten werden geshuffelt
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
            let drawnCard: Cards | undefined = drawCardFromStack ();
            if (drawnCard) {
                playerCards.push (drawnCard);
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
            //Karten werden angezeigt nachdem sie gelöscht wurden
            for (let a = 0; a < playerCards.length; a++) {
                let playerCard: HTMLImageElement = imgGeneratCards(playerCards[a]);
                handCardsDiv.appendChild(playerCard);
                playerCard.addEventListener("click", function (): void {
                    let fitCards: boolean = cardFits (playerCards[a]);
                    //Wenn Spieler Karten ablegen kann wird Karte verschoben, angezeigt und PC ist dran
                    if (fitCards) {
                        openCards.push(playerCards[a]);

                        playerCards.splice(a, 1);

                        showAllCards();
                        //Computer ist dran
                        computerTurn();
                    }
                });
            }
            //Wenn Ziehstapel leer ist werden Karten neu gemischelt und wieder neu generiert 
            if (allCards.length === 0) {
            let newStack: Cards[] = openCards.splice(0, openCards.length - 1);
            allCards = shuffle(newStack);
            console.log("Stapel auffüllen");
            if (allCards.length === 0) {
                cardStackNewDiv.innerHTML = ""; 
            }

        }
            //Spieler- und PC-Karten werden überprüft ob noch Karten in Array vorhanden
            //Wenn in einem Array Karten = 0 dann wird hidden-Klasse entfernt und 
            //Meldung wird angezeigt
            if (computerCards.length === 0 || playerCards.length === 0) {
            let winnerDiv: HTMLDataElement = document.querySelector("#winner");
            winnerDiv.classList.remove("hidden");
            if (computerCards.length === 0) {
                winnerDiv.innerHTML = "Computer gewinnt";
            } else {
                winnerDiv.innerHTML = "Congrats - Du gewinnst";
                }
            }  
        }
        //Kartenname wird auseinander genommen, dass man Wert und Farbe zuordnen kann
        // und werden anschließend wieder als neue Karte zurück gegeben
        function imgGeneratCards(card: Cards): HTMLImageElement {
            let newCard: HTMLImageElement = new Image();
            newCard.className = "cards";
            if (card.values === "card-back") {
                newCard.src = "./cards/card-back.png";
            } else {
                newCard.src = "./cards/" + card.values + "-" + card.color + ".png";
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
            //Es werden alle Computer-Karten durchgeschaut und es wird geschaut, ob eine passt
            let indexFromFitCard: number = -1;
            for (let i = 0; i < computerCards.length; i++) {
                let cardFitsPC: boolean = cardFits(computerCards[i]);
                if (cardFitsPC === true) {
                    indexFromFitCard = i;
                }
            }
            //Eine Karte passt - Karte wird abgelegt
            if (indexFromFitCard >= 0) {
                openCards.push(computerCards[indexFromFitCard]);
                computerCards.splice(indexFromFitCard, 1);
            } else {
                 //Es passt keine Karte also muss Computer Karte ziehen
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

