const wordOperation = (kataKalimat, cb) => {
    cb(kataKalimat)
}

//Deteksi Palindrom
const deteksiPalindrom = (word) => {
    let kata = word.toLowerCase(), kataTerbalik = ''
    for (let i = kata.length; i > 0; i--) {
        kataTerbalik += kata[i - 1]     
    }
    console.log(kata === kataTerbalik ? 'Palindrome' : 'Not Palindrome')
}

//Reverse Words
const reverseWords = (sentence) => {
    let words = sentence.split(' '), kalimatTerbalik = ''

    if (words.length > 1) {
        for (let i = words.length; i > 0; i--) {
            kalimatTerbalik += words[i - 1] + ' '
        }
        console.log(kalimatTerbalik)
    } else {
        console.log(sentence)
    }
}

wordOperation('Katak', deteksiPalindrom)
wordOperation('Saya belajar JavaScript', reverseWords)
wordOperation('JavaScript', reverseWords)