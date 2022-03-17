import Card from './Card.js'

export default class Deck {
    constructor() {
        this.deck = [];
        console.log(`Created new deck with ${this.deck.length} cards`);
        return this;
    }

    get amountOfCards() {return this.deck.length};

    get isEmpty() {return this.deck.length <= 0};

    fill(numOfJokers=0) {
        const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        const suits = [0, 1, 2, 3]
        for (let suit in suits){
            for (let num in nums){
                this.deck.push(new Card(num, suit));
            }
        }
        for (let j=0; j< numOfJokers; j++){
            // Let joker be num = 13, suit = 0
            this.deck.push(new Card(13, 0));
        }
        console.log(`Filled deck with new total of ${this.deck.length} cards`);
        return this
    }

    shuffle() {
        this.deck.sort( () => Math.random() - 0.5 );
        return this
    }

    deal() {
        if (this.isEmpty){
            console.log(`The deck is empty!`);
            return
        }
        const dealtCard = this.deck.pop();
        console.log(`Dealt a card. The deck has ${this.deck.length} cards left`);
        return dealtCard;
    }

    add(card) {
        if (typeof card == 'Card'){
            this.deck.push(card);
        }
        return this
    }

}
