

function findCharacters(text: String) {
    const result = text.replace(/[.!?]+/, '')
    return text ? result.replaceAll(' ', '').split('').length : 0
}

export { findCharacters }