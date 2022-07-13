import CardArray from './CardArray'

export default function manipulateCardArray(obj, buttonName) {
  console.debug(`new manipulateCardArray: ${buttonName}`);
  if (/^New+/.test(buttonName)) {
    const n = Number(buttonName.match(/[0-9]+/)[0])
    return {
      deck: new CardArray().fill(n),
      hand: new CardArray(),
      board: new CardArray(),
      isDeckFaceUp: obj.isDeckFaceUp,
      isBoardVisible: obj.isBoardVisible,
    };
  }
  if (/^DrawIndex+/.test(buttonName)) {
      const index = Number(buttonName.match(/[0-9]+/)[0])
      console.debug(`draw card index ${index}`);
      const amountInHand = obj.hand.amountOfCards
      obj.hand.reverse()
      for (let i=0; i < amountInHand; i++){
        const dealtCard = obj.hand.deal()
        obj.board.add(dealtCard)
      }
      const dealtCard = obj.deck.dealIndex(index);
      obj.hand.add(dealtCard);
      return {
        deck: obj.deck,
        hand: obj.hand,
        board: obj.board,
        isDeckFaceUp: obj.isDeckFaceUp,
        isBoardVisible: obj.isBoardVisible,
      };
  }

  if (/^Draw+/.test(buttonName)) {
      const n = /[0-9]+/.test(buttonName) ? buttonName.match(/[0-9]+/)[0] : 1
      console.debug(`draw ${n} card(s)`);
      const amountInHand = obj.hand.amountOfCards
      obj.hand.reverse()
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
        isDeckFaceUp: obj.isDeckFaceUp,
        isBoardVisible: obj.isBoardVisible,
      };
  }
 
  if (buttonName === "Shuffle") {
      console.debug("Shuffle deck");
      return {
        deck: obj.deck.shuffle(),
        hand: obj.hand,
        board: obj.board,
        isDeckFaceUp: obj.isDeckFaceUp,
        isBoardVisible: obj.isBoardVisible,
      };
  }

  if (buttonName === "Flip") {
      console.debug("Flip deck");
      return {
        deck: obj.deck,
        hand: obj.hand,
        board: obj.board,
        isDeckFaceUp: !obj.isDeckFaceUp,
        isBoardVisible: obj.isBoardVisible,
      };
  }
  if (buttonName === "Hide Board" || buttonName === "Show Board") {
      console.debug("Hide or Show Board");
      return {
        deck: obj.deck,
        hand: obj.hand,
        board: obj.board,
        isDeckFaceUp: obj.isDeckFaceUp,
        isBoardVisible: !obj.isBoardVisible,
      };
  }
}
