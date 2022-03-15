const janjian = new Promise((resolve, reject) => {
    setTimeout(() => {
        const dipenuhi = true
        dipenuhi ? resolve('Janji ditepati') : reject('Janji diingkari')
    }, 1000)
})

const janji = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dipenuhi = false
            dipenuhi ? resolve('OK') : reject('No')
        }, 1000)
    })
}

janjian.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

janji().then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})