const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArr, arrCompare, arrSort) => {
    if (nilaiAwal < nilaiAkhir) {
        if (dataArr.length > 5) {
            let newArr = []
            for (let i = nilaiAwal; i <= nilaiAkhir; i++) {
                newArr.push(i)
            }
            arrCompare(dataArr, newArr, arrSort)
        } else {
            console.log('Jumlah data array harus lebih dari 5')
        }
    } else {
        console.log('Nilai akhir harus lebih besar daripada nilai awal')
    }
}

const arrCompare = (arr1, arr2, arrSort) => {
    if (arr2.some(v => arr1.includes(v)) === true) {
        let resultArr = []
        for (let i = 0; i < arr1.length; i++) {
            if (arr2.includes(arr1[i]) === true) {
                resultArr.push(arr1[i])
            } else {
                continue
            }
        }
        arrSort(resultArr)
    } else {
        console.log('Nilai tidak ditemukan')
    }
}

const arrSort = (arr) => {
    console.log(arr.sort((a, b) => {
        return a - b
    }))
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8], arrCompare, arrSort)
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8], arrCompare, arrSort)
seleksiNilai(5, 17, [2, 25, 4], arrCompare, arrSort)
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18], arrCompare, arrSort)