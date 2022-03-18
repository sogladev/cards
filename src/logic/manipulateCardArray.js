import CardArray from './CardArray'

export default function manipulateCardArray(obj, buttonName) {
  console.log(`new manipulateCardArray: ${buttonName}`);
  if (buttonName === "New deck") {
    return {
       deck: new CardArray().fill(),
       hand: new CardArray(),
       board: new CardArray(),
    };
  }

  if (/^Draw+/.test(buttonName)) {
      const n = /[0-9]+/.test(buttonName) ? buttonName.match(/[0-9]+/)[0] : 1
      console.log(`draw ${n} card(s)`);
      const amountInHand = obj.hand.amountOfCards
      for (let i=0; i < amountInHand; i++){
        const dealtCard = obj.hand.deal()
        obj.board.add(dealtCard)
      }
      for (let i=0; i<n; i++){
        const dealtCard = obj.deck.deal()
        obj.hand.add(dealtCard)
      }
      return {
        deck: obj.deck,
        hand: obj.hand,
        board: obj.board,
      };
  }
 
  if (buttonName === "Shuffle deck") {
      console.log("Shuffle deck");
      return {
        deck: obj.deck.shuffle(),
        hand: obj.hand,
        board: obj.board,
      };
  }
}
