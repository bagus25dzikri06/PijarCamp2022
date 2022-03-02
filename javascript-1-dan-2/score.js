function score(x) {
    let typeCheck = typeof x === 'number'
    switch (typeCheck) {
        case true:
            if (x <= 100 && x >= 80) {
                return 'Nilai A'
            } else if (x < 80 && x >= 70) {
                return 'Nilai B'
            } else if (x < 70 && x >= 50) {
                return 'Nilai C'
            } else if (x < 50 && x >= 0) {
                return 'Nilai D'
            } else {
                return 'Nilai tidak ditemukan'
            }
            break

        case false:
            return 'Type data harus number'
            break
    
        default:
            break
    }
    /*if (typeof x === 'number') {
        if (x <= 100 && x >= 80) {
            return 'Nilai A'
        } else if (x < 80 && x >= 70) {
            return 'Nilai B'
        } else if (x < 70 && x >= 50) {
            return 'Nilai C'
        } else if (x < 50 && x >= 0) {
            return 'Nilai D'
        } else {
            return 'Nilai tidak ditemukan'
        }
    } else {
        return 'Type data harus number'
    }*/
}

console.log(score(78))
console.log(score(-2))
console.log(score('welcome'))