const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4, 5])
        }, 2000)
    })
}

const showData = (data) => {
    console.log(data)
    console.log('Data berhasil ditampilkan')
}

const main = async () => {
    showData(await getData())
}

main()