const getMonth = (callback) => {
    setTimeout(() => {
        let error = false,
        month = ['January', 'February', 'March', 'April', 
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December']

        // Before:
        // !error ? callback(null, month) : callback(new Error('Data Not Found'), [])

        // After:
        return !error ? callback(month) : callback()
    }, 4000)
}

const dataMonth = (months) => {
    return months.map(month => {
        console.log(month)
    })
}

const test = () => {
    console.error('Sorry, Data Not Found')
}

getMonth(dataMonth)
getMonth(test)