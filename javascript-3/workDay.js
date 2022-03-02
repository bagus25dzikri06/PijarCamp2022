const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = [`Senin`, `Selasa`, `Rabu`, `Kamis`, `Jum'at`]
            let cek = dataDay.find((item) => {
                return item === day
            })

            if (cek) {
                resolve(cek)
            } else {
                // Before:
                // reject(new Error('Hari ini bukan hari kerja'))
                // After:
                reject('Hari ini bukan hari kerja')
            }
        }, 3000)
    })
}

// Cleaner and more simple way to do a Promise in JavaScript 
// with try ... catch ... by the ternary operator
/*const cekHariKerja = (day) => {
    const dataDay = [`Senin`, `Selasa`, `Rabu`, `Kamis`, `Jum'at`]
    let cek = dataDay.find((item) => {
        return item === day
    })

    return cek ? Promise.resolve(cek) : Promise.reject('Hari ini bukan hari kerja')
}*/

// How to show the result of the Promise with then ... catch ...
cekHariKerja('Senin').then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

cekHariKerja('Sabtu').then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

// How to show the result of the Promise with try ... catch ...
try {
    cekHariKerja('Senin').then((res) => {
        console.log(res)
    })
} catch (err) {
    console.log(err)
}

try {
    cekHariKerja('Sabtu').then((res) => {
        console.log(res)
    })
} catch (err) {
    console.log(err)
}