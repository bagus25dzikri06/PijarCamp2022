const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArr, callback) => {
    let selectedNum = [], 
    numCompare = nilaiAwal < nilaiAkhir,
    arrLength = dataArr.length > 5

    if (numCompare && arrLength) {
        for (let i = 0; i < dataArr.length; i++) {
            if (callback(nilaiAwal, nilaiAkhir).includes(dataArr[i]) === true) {
                selectedNum.push(dataArr[i])
            } else {
                continue
            }
        }
        const deretBilUrut = selectedNum.sort((a, b) => {
            return a - b
        })

        return urutanBil(deretBilUrut, results)
    } else if (numCompare === false && arrLength || numCompare === false && arrLength === false) {
        return 'Nilai akhir harus lebih besar daripada nilai awal'
    } else if (numCompare && arrLength === false) {
        return 'Jumlah data dalam array harus lebih dari 5'
    }
}

const urutanBil = (dataArr, callback) => { 
    return dataArr.length === 0 ? 'Nilai tidak ditemukan' : callback(dataArr)
}

const numArr = (num1, num2) => {
    let deretBil = []
    for (let i = num1; i <= num2; i++) {
        deretBil.push(i)
    }
    return deretBil
}

const results = (arr) => {
    return arr
}

console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8], numArr))
console.log(seleksiNilai(20, 5, [2, 25, 4, 14, 17, 30, 8], numArr))
console.log(seleksiNilai(17, 5, [2, 25, 4], numArr))