const motorcycle = new Array('Yamaha', 'Honda') // membuat array baru dengan constructor Array()

// menggabungkan beberapa elemen array
const motorString = motorcycle.join(', ')
console.log(motorString)

// menentukan indeks dari suatu elemen array
// Jika elemen tersebut tersedia pada suatu array, maka hasilnya adalah indeks elemen tersebut
// Jika elemen tersebut tidak tersedia pada suatu array, maka hasilnya adalah -1
console.log(motorcycle.indexOf('Honda')) 
console.log(motorcycle.indexOf('Benelli')) 

// menentukan apakah elemen tersebut merupakan anggota suatu array
console.log(motorcycle.includes('Yamaha'))
console.log(motorcycle.includes('Tossa'))

// menambah satu elemen baru pada suatu array
motorcycle.push('Suzuki')
console.log(motorcycle) 

// menghapus elemen terakhir dalam suatu array
const deletedMotorcycle = motorcycle.pop()
console.log(deletedMotorcycle) // elemen yang telah terhapus
console.log(motorcycle)

const buah = ['Pepaya', 'Mangga', 'Pisang', 'Jambu', 'Rambutan', 'Durian', 'Duku', 'Apel', 'Manggis', 'Sawo']

// menghapus beberapa elemen terakhir dalam suatu array (splice(-<jumlah elemen yang ingin dihapus>))
const deletedBuah = buah.splice(-2)
console.log(deletedBuah) // elemen yang telah terhapus
console.log(buah)

// menghapus beberapa elemen pertama dalam suatu array (splice(<jumlah elemen yang ingin dihapus>))
const buah1 = buah.splice(1)
console.log(buah) // elemen yang telah terhapus
console.log(buah1)

// menghapus beberapa elemen pertama dalam suatu array diawali dari indeks tertentu 
// (splice(<indeks awal untuk mulai menghapus elemen yang diinginkan>, <jumlah elemen yang ingin dihapus>))
const deletedBuah1 = buah1.splice(1, 3)
console.log(deletedBuah1) // elemen yang telah terhapus
console.log(buah1)

// mengganti beberapa elemen pertama dalam suatu array diawali dari indeks tertentu
/* (splice(<indeks awal untuk mulai menghapus elemen yang diinginkan>, 
    <jumlah elemen yang ingin dihapus>,
    <elemen-elemen pengganti sebanyak jumlah yang ingin dihapus>)) */
const replacedBuah = buah1.splice(0, 2, 'Buah Naga', 'Nangka')
console.log(replacedBuah) // elemen yang telah diganti
console.log(buah1)

// menghapus elemen pertama dalam suatu array
buah1.shift()
console.log(buah1)

// menambah satu elemen baru pada indeks paling awal di suatu array
buah1.unshift('Srikaya')
console.log(buah1)

// menampilkan setiap elemen yang tertera dalam suatu array lewat suatu looping
buah1.forEach((item, index, array) => {
    console.log(item)
})