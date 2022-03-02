function reverseWord(word) {
    var reversedWord = []
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord.push(word[i])      
    }
    return reversedWord.join('')
}

console.log(reverseWord('Javascript'))