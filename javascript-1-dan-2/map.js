const cars = ['Porsche', 'BMW', 'Tesla', 'Honda']

cars.map((e, i) => {
    console.log(e)
})

cars.forEach((e, i) => {
    console.log(`${i + 1} - ${e}`)
})

const carArray = cars.map((e, i) => {
    return (`${i + 1} - Mobil ${e}`)
})

console.log(carArray)