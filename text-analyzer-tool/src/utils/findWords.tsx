

function findWords(text: String) {
    const result = text.replace(/[.!?]+/, '')
    return text ? result.split(' ').length - 1 : 0
}

export { findWords }