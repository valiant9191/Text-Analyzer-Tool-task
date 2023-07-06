import { findWords } from "./findWords"


function getAverageTime(text: string) {
    const words = findWords(text)
    return Math.floor(words / 225)
}

export { getAverageTime }