import Deck from './Deck.js'

export default function manipulateDeck(obj, buttonName) {
  console.log("new manipulateDeck");
  if (buttonName === "New deck") {
    console.log("new deck");
    return {
       deck: new Deck().fill(),
        board: new Deck(),
        next: null,
    };
  }

  if (buttonName === "Draw <n>" || buttonName === "Draw") {
      if (obj.deck.isEmpty){
          console.log("deck is empty!")
          return {
            next: obj.next,
            deck: obj.deck,
            board: obj.board,
          }
      }
      console.log("draw");
      const next = obj.deck.deal()
      return {
        next: next,
        deck: obj.deck,
        board: obj.board.add(next),
      };
  }

  if (buttonName === "Shuffle remaining") {
      console.log("shuffle remaining");
      return {
          deck: obj.deck.shuffle(),
          board: obj.board,
          next: null,
      };
  }
}
