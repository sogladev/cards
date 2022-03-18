import Deck from './Deck.js'

export default function manipulateDeck(obj, buttonName) {
  console.log(`new manipulateDeck: ${buttonName}`);
  if (buttonName === "New deck") {
    console.log("new deck");
    return {
       deck: new Deck().fill(),
       board: new Deck(),
       amountOfCardsDrawn: 0,
    };
  }

  if (/Draw+/.test(buttonName)) {
      const n = /[0-9]+/.test(buttonName) ? buttonName.match(/[0-9]+/)[0] : 1
      console.log(`draw ${n} card(s)`);
      const amountOfCardsBefore = obj.deck.amountOfCards
      for (let i=0; i<n; i++){
        const dealtCard = obj.deck.deal()
        obj.board.add(dealtCard)
      }
      return {
        deck: obj.deck,
        board: obj.board,
        amountOfCardsDrawn: amountOfCardsBefore - obj.deck.amountOfCards,
      };
  }
 
  if (buttonName === "Shuffle deck") {
      console.log("Shuffle deck");
      return {
          deck: obj.deck.shuffle(),
          board: obj.board,
      };
  }
}
