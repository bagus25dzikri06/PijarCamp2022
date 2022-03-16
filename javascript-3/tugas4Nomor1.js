const cekHariKerja = (day, callback) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = [`Senin`, `Selasa`, `Rabu`, `Kamis`, `Jum'at`]
            let cek = dataDay.find((item) => {
                return item === day
            })

            if (cek) {
                resolve(callback(cek))
            } else {
                reject(new Error('Hari ini bukan hari kerja'))

            }
        }, 3000)
    })
}

const dayCallback = (res) => {
    console.log(res)
}

// How to show the result of the Promise with catch ...
const dinoKerjo = async (hari, cb) => {
    await cekHariKerja(hari, cb).catch((err) => {
        console.log(err.message)
    })
}

dinoKerjo('Senin', dayCallback)
dinoKerjo('Sabtu', dayCallback)

// How to show the result of the Promise with try ... catch ...
const hariKerja = async (hari, cb) => {
    try {
        await cekHariKerja(hari, cb)
    } catch (err) {
        console.log(err.message)
    }
}

hariKerja('Senin', dayCallback)
hariKerja('Sabtu', dayCallback)