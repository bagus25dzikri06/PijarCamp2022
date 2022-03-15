const empat = () => {
    console.log('empat')
}

const lima = (callback) => {
    setTimeout(() => {
        console.log('lima')
        const status = true
        if (status) {
            callback(null, [1, 2, 3])
        } else {
            callback(true, 'failed')
        }
    }, 2000)
}

const enam = (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log('enam')
        console.log(data)
    }
}

empat()
lima(enam)