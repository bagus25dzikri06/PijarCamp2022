const numbers = [7, 19, 38, 6, 71]
//Mengkalkulasi setiap elemen suatu array, hingga menampilkannya dalam suatu hasil saat dijalankan
console.log(numbers.reduce((x, y) => x * y))

const apparels = ['Warrix', 'Juara', 'Specs', 'Mizuno', 'Puma', 'Jako']
//Menyaring setiap elemen suatu array untuk menjadi suatu elemen pada array baru dengan syarat yang ditentukan 
console.log(apparels.filter(arr => arr.length <= 5))

const skutik = ['Beat', 'NMax', 'Airblade', 'Skywave', 'Click', 'Nouvo']
//Menguji apakah setiap elemen suatu array memiliki syarat atau kondisi yang ditentukan
console.log(skutik.every(val => {
    return val.length >= 5
}))
console.log(skutik.some(val => {
    return val.length >= 5
}))

const arr1 = [24, 19, 'eight', 56, 'fifty'],
//Membuat suatu set baru
set1 = new Set(arr1)
//Menghapus satu elemen array setelah array diubah ke dalam bentuk suatu set
set1.delete(56)
console.log(set1 + ' ' + set1.size)
//Menghapus semua elemen array setelah array diubah ke dalam bentuk suatu set
set1.clear()
console.log(set1.size)

const databases = ['MySQL', 'MariaDB', 'MongoDB', 'PostgresQL', 'SQL Server']
//Menampilkan apakah elemen tersebut tersedia di suatu array
console.log(databases.includes('MongoDB'))
console.log(databases.includes('Redis'))
//Menampilkan apakah elemen tersebut tersedia di suatu indeks dalam suatu array
console.log(databases.includes('MySQL', 0))
console.log(databases.includes('MySQL', 4))

const arr2 = [8, 17, 23], arr3 = [34, 66, 89]
//Menggabungkan kedua array yang berbeda menjadi suatu array baru
console.log(arr2.concat(arr3))

const text = 'JavaScript'
//Menampilkan beberapa string sebelum suatu string
console.log(text.padStart(8,'*')) //Jumlah string yang ditampilkan kurang dari panjang suatu string 
console.log(text.padStart(19,'*')) //Jumlah string yang ditampilkan lebih dari panjang suatu string
console.log(text.padStart(6)) //Tanpa ada string yang ditampilkan dengan nilai yang lebih dari panjang suatu string
console.log(text.padStart(27)) //Tanpa ada string yang ditampilkan dengan nilai yang lebih dari panjang suatu string

//Menampilkan beberapa string sesudah suatu string
console.log(text.padEnd(8,'*')) //Jumlah string yang ditampilkan kurang dari panjang suatu string 
console.log(text.padEnd(19,'*')) //Jumlah string yang ditampilkan lebih dari panjang suatu string
console.log(text.padEnd(6)) //Tanpa ada string yang ditampilkan dengan nilai yang lebih dari panjang suatu string
console.log(text.padEnd(27)) //Tanpa ada string yang ditampilkan dengan nilai yang lebih dari panjang suatu string