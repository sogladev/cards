export default class CardArray {
    constructor(){
        this.cards = [];
        return this
    }

    get amountOfCards() {return this.cards.length};

    get isEmpty() {return this.cards.length <= 0};

    fill(numOfJokers=0) {
        const numOfCards = 52 + numOfJokers
        for (let i=1; i<=numOfCards; i++){
            this.cards.push(i);
        }
        console.debug(
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
            console.debug(`The CardArray is empty!`);
            return
        }
        const dealtCard = this.cards.pop();
        console.debug(
            `Dealt a card ${dealtCard}. The CardArray has\
            ${this.cards.length} cards left`
        );
        return dealtCard;
    }

    dealIndex(value) {
        if (this.isEmpty){
            console.debug(`The CardArray is empty!`);
            return
        }
        const index = this.cards.indexOf(value);
        const dealtCard = this.cards.splice(index,1)[0]
        console.debug(
            `Dealt a card ${dealtCard}. The CardArray\
            has ${this.cards.length} cards left`
        );
        return dealtCard;
    }

    add(card) {
        if (/[0-9]+/.test(card)){
            this.cards.push(card);
        }
        return this
    }

    reverse() {
        this.cards.reverse()
        return this
    }

}
