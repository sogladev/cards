export default class Card {
    constructor(num, suit) {
        this.num = num;
        this.suit = suit;
    }
    toString() {
        return `${this.num}.${this.suit}`
    }
}
