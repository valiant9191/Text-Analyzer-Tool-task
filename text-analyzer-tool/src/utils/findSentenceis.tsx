

function findSentecies(text: String) {
    return text ? text.split(/[.!?]+/).length - 1 : 0
}

export { findSentecies }