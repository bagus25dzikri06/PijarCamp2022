const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve([1, 2, 3, 4, 5])
            reject('error')
        }, 2000)
    })
}

const showData = (data) => {
    console.log(data)
    console.log('Data berhasil ditampilkan')
}

const main = async () => {
    //showData(await getData())
    try {
        showData(await getData())
    } catch (error) {
        console.log(error)
    }
}

main()