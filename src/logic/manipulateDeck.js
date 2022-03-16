import Deck from './Deck.js'

export default function manipulateDeck(obj, buttonName) {
  console.log("new manipulateDeck");
  if (buttonName === "New deck") {
    console.log("new deck");
    return {
       deck: new Deck().fill(),
       board: new Deck(),
    };
  }

  if (buttonName === "Draw <n>" || buttonName === "Draw") {
      if (obj.deck.isEmpty){
          console.log("deck is empty!")
          return {
            deck: obj.deck,
            board: obj.board,
          }
      }
      console.log("draw");
      const dealtCard = obj.deck.deal()
      return {
        deck: obj.deck,
        board: obj.board.add(dealtCard),
      };
  }

  if (buttonName === "Shuffle remaining") {
      console.log("shuffle remaining");
      return {
          deck: obj.deck.shuffle(),
          board: obj.board,
      };
  }
}
