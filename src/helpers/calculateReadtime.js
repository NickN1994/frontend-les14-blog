function calculateReadTime(text) {

    const amountOfWords = text.split(" ").length;
    console.log("amount of words:", amountOfWords)
    return Math.round(amountOfWords / 100 * 0.3);
}

export default calculateReadTime;