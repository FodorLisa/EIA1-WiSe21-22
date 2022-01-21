//Array für das Kartendeck 
const cardDeck: string[] = [
    "cards/0R.png", "cards/1R.png", "cards/2R.png", "cards/3R.png", "cards/4R.png", "cards/5R.png", "cards/6R.png", "cards/7R.png", "cards/8R.png", "cards/9R.png", 
    "cards/0G.png", "cards/1G.png", "cards/2G.png", "cards/3G.png", "cards/4G.png", "cards/5G.png", "cards/6G.png", "cards/7G.png", "cards/8G.png", "cards/9G.png", 
    "cards/0B.png", "cards/1B.png", "cards/2B.png", "cards/3B.png", "cards/4B.png", "cards/5B.png", "cards/6B.png", "cards/7B.png", "cards/8B.png", "cards/9B.png",  
    "cards/0Y.png", "cards/1Y.png", "cards/2Y.png", "cards/3Y.png", "cards/4Y.png", "cards/5Y.png", "cards/6Y.png", "cards/7Y.png", "cards/8Y.png", "cards/9Y.png"
];
var cardDeckStatus: boolean = false;
var oldCard: string[] = [];
var handCard: string[] = [];

var randomCard: number[] = 0;

//Karten ausgeben 
function drawCards(): void {
    if (cardDeckStatus == false) {
        cardDeckStatus = true;
        for (let index: number = 0; index < 5; index++) {
            const randomCard: number = Math.floor(Math.random() * cardDeck.length + [0];
            handCard [index] = cardDeck[randomCard];
            cardDeck [randomCard] = "z";
            cardDeck.sort();
            cardDeck.pop(5);
            document.getElementById("cards" + index).innerHTML = ("<img src='cards/" + (handCard[index]) +  ".png"); id = "" + index; var onclick: (this.id, ev: MouseEvent); =>any;) 

            console.log(randomCard);
        }
    } else {
        for (let index: number = 0; index < 5; index++) {
            oldCard.unshift(handCard[index]);
            const randomCard: number = Math.floor(Math.random() * cardDeck.length + [0];
            handCard [index] = cardDeck[randomCard];
            cardDeck [randomCard] = "z";
            cardDeck.sort();
            cardDeck.pop(5);
            document.getElementById("cards" + index).innerHTML = ("<img src='cards/" + (handCard[index]) +  ".png"); id = "" + index; var onclick: (this.id, ev: MouseEvent); =>any;) 

            console.log(randomCard);    
    }
}

    window.addEventListener("load", function (): void  {
     document.querySelector().addEventListener(„click“, drawCards);



};
