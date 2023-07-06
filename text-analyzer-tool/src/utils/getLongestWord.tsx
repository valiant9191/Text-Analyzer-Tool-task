

function getLongestWord(text: String) {
    const words = text.split(' ');
    let longest = '';

    for (let i = 0; i < words.length; i++) {
        const word = words[i].replace(/[^\w]/g, '');

        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

export { getLongestWord }