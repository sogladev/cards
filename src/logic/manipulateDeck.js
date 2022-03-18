import Deck from '../components/Deck'

export default function manipulateDeck(obj, buttonName) {
  console.log(`new manipulateDeck: ${buttonName}`);
  if (buttonName === "New deck") {
    return {
       deck: new Deck().fill(),
       hand: new Deck(),
       board: new Deck(),
    };
  }

  if (/^Draw+/.test(buttonName)) {
      const n = /[0-9]+/.test(buttonName) ? buttonName.match(/[0-9]+/)[0] : 1
      console.log(`draw ${n} card(s)`);
      for (let i=0; i < obj.hand.amountOfCards; i++){
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
