const getNilai = (showNilai) => {
    let a = 6, b = 9
    console.log(showNilai(a, b))
}

const tampilkanNilai = (x, y) => {
    res = x * y 
    return res
}

const jumlah = (num1, num2, proses, hasil) => {
    proses(num1, num2, hasil)
}

const proses = (a, b, hasil) => {
    hasil(a + b)
}

const hasil = (x) => {
    console.log(x)
}

const hitung = (num1, num2, kali, pangkatDua) => {
    kali(num1, num2, pangkatDua)
}

const kali = (a, b, pangkatDua) => {
    pangkatDua(a * b)
}

const pangkatDua = (x) => {  
    console.log(x ** 2)
}

getNilai(tampilkanNilai)
jumlah(3, 2, proses, hasil)
hitung(4, 7, kali, pangkatDua)