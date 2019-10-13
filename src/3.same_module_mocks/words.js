function reverse(str) {
    return str.split('').reverse().join('')
}

export function reverseEachWord(sentence) {
    const words = sentence.split(' ')
    return words.map(word => word ? reverse(word) : word).join(' ')
}
