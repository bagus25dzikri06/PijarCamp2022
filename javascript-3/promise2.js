const satu = () => {
    console.log('satu')
}

const dua = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('dua')
            const two = true
            two? resolve('data OK') : reject('failed')
        }, 2000)
    })
}

const tiga = (data) => {
    console.log('tiga')
    console.log(data)
}

satu()
dua().then((res) => {
    tiga(res)
}).catch((err) => {
    console.log(err)
})