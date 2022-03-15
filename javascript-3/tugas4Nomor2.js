const getMonth = (callback) => {
    setTimeout(() => {
        let error = false,
        month = ['January', 'February', 'March', 'April', 
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December']

        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Data Not Found'), [])
        }
    }, 4000)
}

const showMonth = (err, data) => {
    if (err) {
        console.log(err.message)
    } else {
        data.map(element => {
            console.log(element)
        })
    }
}

getMonth(showMonth)