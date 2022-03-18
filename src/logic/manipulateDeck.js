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


  if (buttonName.match("Draw <[0-9]+>")) {
      if (obj.deck.isEmpty){
          console.log("deck is empty!")
          return {
            deck: obj.deck,
            board: obj.board,
            amountOfCardsDrawn: 0,
          }
      }
      const n = buttonName.match('[0-9]+')[0]
      console.log(`draw ${n} cards`);
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

  if (buttonName === "Draw") {
      if (obj.deck.isEmpty){
          console.log("deck is empty!")
          return {
            deck: obj.deck,
            board: obj.board,
            amountOfCardsDrawn: 0,
          }
      }
      console.log("draw");
      const dealtCard = obj.deck.deal()
      return {
        deck: obj.deck,
        board: obj.board.add(dealtCard),
        amountOfCardsDrawn: 1,
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
