//1. Cek bilangan kelipatan 3
const cekKelipatan3 = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let cekAngka = num % 3 === 0

            if (cekAngka) {
                resolve(cekAngka)
            } else {
                reject(new Error('Bilangan ini bukan merupakan kelipatan 3'))

            }
        }, 3000)
    })
}

const angkaKel3 = async (angka) => {
    await cekKelipatan3(angka).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err.message)
    })
}

angkaKel3(24)
angkaKel3(82)

//2. Jumlah elemen suatu array
const cekTotalArrElements = (arr, callback) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let cekArr = arr.every((e) => {
                return typeof e === 'number'
            })

            if (cekArr) {
                resolve(callback(arr))
            } else {
                reject(new Error('Setiap elemen harus berupa angka'))

            }
        }, 3000)
    })
}

const arrJumlah = (res) => {
    console.log(res.reduce((x, y) => {
        return x + y
    }))
}

const totalElArr = async (arr, cb) => {
    try {
        await cekTotalArrElements(arr, cb)
    } catch (err) {
        console.log(err.message)
    }
}

totalElArr([8, 17, 7, 22, 34], arrJumlah)
totalElArr([13, 'dua', 18, 5, 'lima puluh'], arrJumlah)