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
                reject(new Error('Hari ini bukan hari kerja'))

            }
        }, 3000)
    })
}

// How to show the result of the Promise with then ... catch ...
const dinoKerjo = async (hari) => {
    await cekHariKerja(hari).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err.message)
    })
}

dinoKerjo('Senin')
dinoKerjo('Sabtu')

// How to show the result of the Promise with try ... catch ...
const hariKerja = async (hari) => {
    try {
        await cekHariKerja(hari).then((res) => {
            console.log(res)
        })
    } catch (err) {
        console.log(err.message)
    }
}

hariKerja('Senin')
hariKerja('Sabtu')