function isPositiveInteger(input) {
    const positiveInteger = /^[0-9]\d*(?:\.\d+)?$/;
    return positiveInteger.test(input)
}

export default function isValidNumOfCards(input) {
    console.debug(`Validating input: ${input}`)
    if (isPositiveInteger(input)){
        const min = 0;
        const max = 56;
        const number = parseInt(input);
        return min <= number && number <= max;
    }
    else {
        return false
    }
}
