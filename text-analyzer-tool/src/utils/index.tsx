import { pronouns as pronounsList } from '../data/pronouns'


type typeAnalizeText = {
    words: Number,
    characters: Number,
    sentences: Number,
    paragraphs: Number,
    pronouns: Number,
    averageReadingTime: String,
    longestWord: String,
}

function analyzeText(text: String): typeAnalizeText {
    if (text.trim() === '') {
        return {
            words: 0,
            characters: 0,
            sentences: 0,
            paragraphs: 0,
            pronouns: 0,
            averageReadingTime: '-',
            longestWord: '-',
        }
    }
    const words = text.trim().split(/\s+/).length;

    console.log(text.trim().split(/\s+/))
    const characters = text.length;

    const sentences = text.split(/[.!?]+/).length - 1;

    const paragraphs = text.split(/\n\n+/).length;

    const pronounsRegex = new RegExp(`\\b(?:${pronounsList.join('|')})\\b`, 'gi');
    const pronouns = text.match(pronounsRegex)?.length || 0;


    const averageReadingTime = '~' + Math.ceil(words / 250) + ' minute';

    const longestWord = text
        .split(/\s+/)
        .reduce((longest, word) => (word.length > longest.length ? word : longest), '');


    return {
        words,
        characters,
        sentences,
        paragraphs,
        pronouns,
        averageReadingTime,
        longestWord,
    };
}


export {
    analyzeText,
}