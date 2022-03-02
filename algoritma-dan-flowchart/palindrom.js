function palindrom(word) {
    var kata = word.toLowerCase(), kataTerbalik = []
    for (let i = kata.length - 1; i >= 0; i--) {
        kataTerbalik.push(kata[i])      
    }

    return kata === kataTerbalik.join('') ? 'Palindrome' : 'Not Palindrome'
}

console.log(palindrom('Malam'))