const avgUN = (dataNilaidanMapel, bagi, grade) => {
    if (typeof dataNilaidanMapel === 'object' === true) {
        let totalNilai = 0, rataRata
        for (let i = 0; i <= Object.keys(dataNilaidanMapel).length - 1; i++) {
            totalNilai += Object.values(dataNilaidanMapel)[i]
        }

        rataRata = bagi(totalNilai, Object.keys(dataNilaidanMapel).length, grade)
        return rataRata
    } else {
        return 'Type data harus object'
    }
}

const bagi = (num1, num2, grade) => {
    return grade(num1 / num2)
}

const grade = (nilai) => {
    return (nilai <= 100) && (nilai >= 90) ? 'Nilai rata-rata: ' + nilai + ' (' + 'Grade A' + ')' : 
           (nilai <= 89) && (nilai >= 80) ? 'Nilai rata-rata: ' + nilai + ' (' + 'Grade B' + ')' :
           (nilai <= 79) && (nilai >= 70) ? 'Nilai rata-rata: ' + nilai + ' (' + 'Grade C' + ')' :
           (nilai <= 69) && (nilai >= 60) ? 'Nilai rata-rata: ' + nilai + ' (' + 'Grade D' + ')' : 
           'Nilai rata-rata: ' + nilai + ' (' + 'Grade E' + ')'
}

console.log(avgUN({
    matematika: 80,
    bhs_indonesia: 90,
    bhs_inggris: 88,
    sejarah: 87
}, bagi, grade))
console.log(avgUN(100, bagi, grade))