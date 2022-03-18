export default class CardArray {
    constructor(){
        this.cards = [];
        return this
    }

    get amountOfCards() {return this.cards.length};

    get isEmpty() {return this.cards.length <= 0};

    fill(numOfJokers=0) {
        const numOfCards = 52 + numOfJokers
        for (let i=0; i<numOfCards; i++){
            this.cards.push(i);
        }
        console.log(
            `Filled CardArray with new total of ${this.cards.length} cards`
        );
        return this
    }

    shuffle() {
        this.cards.sort( () => Math.random() - 0.5 );
        return this
    }

    deal() {
        if (this.isEmpty){
            console.log(`The CardArray is empty!`);
            return
        }
        const dealtCard = this.cards.pop();
        console.log(
            `Dealt a card. The CardArray has ${this.cards.length} cards left`
        );
        return dealtCard;
    }

    add(card) {
        if (/[0-9]+/.test(card)){
            this.cards.push(card);
        }
        return this
    }
}
