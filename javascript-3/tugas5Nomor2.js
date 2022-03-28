const pijarFood = (harga, voucher, jarak, pajak, cb1, cb2, cb3) => {
    let diskon = 0, 
    diskonPijarFood5 = harga * 0.5, 
    diskonDitraktirPijar = harga * 0.6,
    ongkosKirim = 5000, 
    totalOngkir = ongkosKirim + 3000 * (jarak - 2),
    foodTax = harga * 0.05,
    jarakTempuh = jarak <= 2,
    totalPajak = pajak === true

    console.log(`Harga      : ${harga}`)
    if (voucher.toUpperCase() === 'PIJARFOOD5') {
        if ((harga >= 50000) && (diskonPijarFood5 <= 50000)) {
            diskon = diskonPijarFood5
        } else {
            diskon
        }
    } else if (voucher.toUpperCase() === 'DITRAKTIRPIJAR') {
        if ((harga >= 25000) && (diskonDitraktirPijar <= 30000)) {
            diskon = diskonDitraktirPijar
        } else {
            diskon
        }
    } else {
        diskon
    }
    console.log(`Diskon     : ${diskon}`)

    console.log(jarakTempuh ? `Biaya Antar: ${ongkosKirim}` : `Biaya Antar: ${totalOngkir}`)
    console.log(totalPajak ? `Pajak      : ${foodTax}` : `Pajak     : ${0}`)
    console.log('===================')

    if (jarakTempuh && totalPajak) {
        console.log(`Sub Total  : ${cb3(harga, diskon, ongkosKirim, foodTax, cb1, cb2)}`)
    } else if (jarakTempuh && !totalPajak) {
        console.log(`Sub Total  : ${cb1(harga, diskon, ongkosKirim, cb2)}`)
    } else if (!jarakTempuh && totalPajak) {
        console.log(`Sub Total  : ${cb3(harga, diskon, totalOngkir, foodTax, cb1, cb2)}`)
    } else {
        console.log(`Sub Total  : ${cb1(harga, diskon, totalOngkir, cb2)}`)
    }
}

const totalEmpat = (num1, num2, num3, num4, totalTiga, kurang) => {
    return num4 + totalTiga(num1, num2, num3, kurang)
}

const totalTiga = (num1, num2, num3, kurang) => {
    return num3 + kurang(num1, num2)
}

const kurang = (num1, num2) => {
    return num1 - num2
}

pijarFood(75000, 'PIJARFOOD5', 5, true, totalTiga, kurang, totalEmpat)
pijarFood(30000, 'PIJARFOOD5', 5, true, totalTiga, kurang, totalEmpat)
pijarFood(45000, 'DITRAKTIRPIJAR', 12, true, totalTiga, kurang, totalEmpat)