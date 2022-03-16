export default function manipulateDeck(obj, buttonName) {
  console.log("new manipulateDeck");
  if (buttonName === "New deck") {
    console.log("new deck");
    return {
       deck: ['King of Hearts', 'King of Clubs', 'Queen of Clubs', 'King of Spades', 'Ace of Spades    '],
        board: [],
        next: null,
    };
  }

  if (buttonName === "Draw") {
      console.log("draw");
      const next = obj.deck.shift()
      obj.board.unshift(next)
      return {
        next: next,
        deck: obj.deck,
        board: obj.board
      };
  }

  if (buttonName === "Draw <n>") {
      console.log("draw n");
      const next = obj.deck.shift()
      obj.board.unshift(next)
      return {
        next: next,
        deck: obj.deck,
        board: obj.board,
      };
  }

  if (buttonName === "Shuffle remaining") {
      console.log("shuffle remaining");
      return {
          deck: obj.deck,
          board: obj.board,
          next: null,
      };
  }
}
