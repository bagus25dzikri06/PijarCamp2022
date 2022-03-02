function reverseSentence(kalimat) {
    var kata = kalimat.split(' '), kalimatTerbalik = []

    if (kata.length > 1) {
        for (let i = kata.length - 1; i >= 0; i--) {
            kalimatTerbalik.push(kata[i])
        }
        return kalimatTerbalik.join(' ')
    } else {
        return kata.join('')
    }
}

console.log(reverseSentence('Saya belajar Javascript'))
console.log(reverseSentence('Welcome'))