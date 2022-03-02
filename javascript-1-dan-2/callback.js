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

getNilai(tampilkanNilai)
jumlah(6, 9, proses, hasil)