const pijarFood = (harga, voucher, jarak, pajak, cb1, cb2) => {
    let diskon, 
    diskonPijarFood5 = harga * 0.5, 
    diskonDitraktirPijar = harga * 0.6,
    ongkosKirim = 5000, 
    totalOngkir = ongkosKirim + 3000 * (jarak - 2),
    foodTax = harga * 0.05,
    jarakTempuh = jarak <= 2,
    totalPajak = pajak === true

    console.log(`Harga: ${harga}`)
    if (voucher === 'PIJARFOOD5' && voucher.toUpperCase() === 'PIJARFOOD5') {
        if ((harga >= 50000) && (diskonPijarFood5 <= 50000)) {
            diskon = harga - diskonPijarFood5
        } else {
            diskon = harga 
        }
    } else if (voucher === 'DITRAKTIRPIJAR' && voucher.toUpperCase() === 'DITRAKTIRPIJAR') {
        if ((harga >= 25000) && (diskonDitraktirPijar <= 30000)) {
            diskon = harga - diskonDitraktirPijar
        } else {
            diskon = harga 
        }
    } else {
        diskon = harga
    }
    console.log(`Diskon     : ${diskon}`)

    console.log(jarakTempuh ? `Biaya Antar: ${ongkosKirim}` : `Biaya Antar: ${totalOngkir}`)
    console.log(totalPajak ? `Pajak      : ${foodTax}` : `Pajak     : ${0}`)
    console.log('================= +')

    if (jarakTempuh && totalPajak) {
        cb2(diskon, ongkosKirim, foodTax)
    } else if (jarakTempuh && !totalPajak) {
        cb1(diskon, ongkosKirim)
    } else if (!jarakTempuh && totalPajak) {
        cb2(diskon, totalOngkir, foodTax)
    } else {
        cb1(diskon, totalOngkir)
    }
}

const jumlahDua = (num1, num2) => {
    console.log(`Sub Total  : ${num1 + num2}`)
}

const jumlahTiga = (num1, num2, num3) => {
    console.log(`Sub Total  : ${num1 + num2 + num3}`)
}

pijarFood(75000, 'PIJARFOOD5', 5, true, jumlahDua, jumlahTiga)