car1 = ['Chevrolet', 'GMC', 'Pontiac']
car2 = [...car1, 'Acura', 'Lexus']
console.log(car2)

const data = {
    nama: 'Udin',
    asal: 'Jakarta'
}, biodata = {
    ...data
}, biodata1 = {
    ...data,
    phone: '081282738236',
    nama: 'Jamal'
}
console.log(biodata)
console.log(biodata1)