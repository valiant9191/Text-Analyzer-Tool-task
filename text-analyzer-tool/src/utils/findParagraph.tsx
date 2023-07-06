

function findParagraph(text: String) {

    return text ? text.split('\n').length : 0
}

export { findParagraph }