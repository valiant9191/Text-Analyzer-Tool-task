import { pronouns } from '../data/pronouns'

function findPronouns(text: String) {
    const textArray = text.replace(/[.!?]+/, '').split(' ')
    const filteredElements = []
    let amountResult = 0
    pronouns.forEach(el => {
        textArray.filter((word) => {
            if (word === el) {
                amountResult++
            }
        })
    })
    return amountResult
}

export { findPronouns }