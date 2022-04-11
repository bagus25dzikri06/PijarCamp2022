const findShoes = (arr) => {
    pasanganSepatu = [], totalSepatu = [];
    sortedArr = arr.sort((a, b) => {
        return a - b
    })

    if (sortedArr.every(x => typeof x === 'number')) {
        for (let i = 0; i < sortedArr.length; i++) {
            if (sortedArr[i] === sortedArr[i + 1]) {
                pasanganSepatu.push(sortedArr[i])
            } else {
                continue
            }
        }
        for (let i = 0; i < pasanganSepatu.length; i++) {
            if (pasanganSepatu[i] === pasanganSepatu[i + 1]) {
                totalSepatu.push(pasanganSepatu[i])
            } else {
                totalSepatu.push(pasanganSepatu[i + 1])
            }
        }

        totalSepatu.pop()
        return totalSepatu.length
    } else {
        return 'Maaf, ukuran sepatu harus berupa angka'
    }
}

console.log(findShoes([5, 13, 7, 5, 9, 20, 9, 5, 14]))
console.log(findShoes([5, 13, 'XXL', 5, 'XL', 20, 9, 5, 14]))
console.log(findShoes([5, 5, 5, 5]))
console.log(findShoes([1, 1, 1]))