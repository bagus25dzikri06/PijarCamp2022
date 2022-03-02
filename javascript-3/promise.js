const janjian = new Promise((resolve, reject) => {
    setTimeout(() => {
        const dipenuhi = true
        dipenuhi ? resolve('Janji ditepati') : reject('Janji diingkari')
    }, 1000)
})

janjian.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})