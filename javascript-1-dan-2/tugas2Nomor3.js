const printSegitiga = (panjangSisi) => {
    if (typeof panjangSisi === 'number') {
        let hasil = ''
        for (let i = panjangSisi; i >= 1; i--) {
            for (let j = 1; j <= i; j++) {
                hasil += j + ' '
            }
            hasil += '\n'
        }
        console.log(hasil)
    } else {
        console.log("Data harus number")
    }
}

printSegitiga(8)
printSegitiga('sebelas')