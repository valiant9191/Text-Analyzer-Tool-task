import { findParagraph } from './findParagraph'
import { findSentecies } from './findSentenceis'
import { findCharacters } from './findCharacters'
import { findWords } from './findWords'
import { findPronouns } from './findPronouns'
import { getAverageTime } from './getAverageTime'
import { getLongestWord } from './getLongestWord'


// function analyzeText(text: String) {
//     // Counting Words
//     const words = text.split(/\s+/).length;

//     // Counting Characters
//     const characters = text.replace(/\s/g, '').length;

//     // Counting Sentences
//     const sentences = text.split(/[.!?]+/).length;

//     // Counting Paragraphs
//     const paragraphs = text.split(/\n\n+/).length;

//     // Counting Pronouns (assuming a predefined list of pronouns)
//     const pronouns = text.match(/\b(?:he|she|it|they|we|you|I|me|him|her|us|them)\b/gi)?.length || 0;

//     // Average Reading Time (assuming 250 words per minute)
//     const averageReadingTime = Math.ceil(words / 250);

//     // Finding Longest Word
//     const longestWord = text
//         .split(/\s+/)
//         .reduce((longest, word) => (word.length > longest.length ? word : longest), '');

//     return {
//         Words: words,
//         Characters: characters,
//         Sentences: sentences,
//         Paragraphs: paragraphs,
//         Pronouns: pronouns,
//         'Average Reading Time': averageReadingTime,
//         'Longest word': longestWord,
//     };
// }


export {
    // analyzeText,
    findParagraph,
    findSentecies,
    findCharacters,
    findWords,
    findPronouns,
    getAverageTime,
    getLongestWord
}