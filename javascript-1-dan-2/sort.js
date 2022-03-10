const buah = ['Nanas', 'Mangga', 'Rambutan'],
angka = [200, 1, 3, 9, 100]

console.log(buah.sort())
console.log(angka.sort((a, b) => {
    return a - b
}))