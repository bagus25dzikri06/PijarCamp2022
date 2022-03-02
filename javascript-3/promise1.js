const cekBilangan = (num) => {
    return num % 2 === 0 ? Promise.resolve(num + ' adalah bilangan genap') : Promise.reject(num + ' adalah bilangan ganjil')
}

const stringLengthCheck = (word) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return word.length > 5 ? resolve('Jumlah huruf dalam kata ' + word + ' lulus uji') : 
                                     reject('Jumlah huruf dalam kata ini harus lebih dari 5')
        }, 3600);
    })
}

setTimeout(() => {
    cekBilangan(18).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })    
}, 2000)

cekBilangan(37).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

try {
    stringLengthCheck('JavaScript').then((res) => {
        console.log(res)
    })
} catch (err) {
    console.log(err)
}

try {
    stringLengthCheck('katak').then((res) => {
        console.log(res)
    })
} catch (err) {
    console.log(err)
}