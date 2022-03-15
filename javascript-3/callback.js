const satu = () => {
    console.log('satu')
}

const dua = (callback) => {
    setTimeout(() => {
        console.log('dua')
        callback([1, 2, 3])
    }, 2000)
}

const tiga = (data) => {
    console.log('tiga')
    console.log(data)
}

satu()
dua(tiga)