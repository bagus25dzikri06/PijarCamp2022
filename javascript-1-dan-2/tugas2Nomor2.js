const avgUN = (dataNilai) => {
    let totalNilai = 0
    if (dataNilai.length === 4) {
        for (let i = 0; i < dataNilai.length; i++) {
            totalNilai += dataNilai[i]
        }

        if (typeof totalNilai === 'number') {
            rataRataNilai = totalNilai / dataNilai.length
            console.log((rataRataNilai <= 100) && (rataRataNilai > 90) ? `Rata-rata = ${rataRataNilai}\nGrade = A` : 
                        (rataRataNilai <= 90) && (rataRataNilai > 80) ? `Rata-rata = ${rataRataNilai}\nGrade = B` :
                        (rataRataNilai <= 80) && (rataRataNilai > 70) ? `Rata-rata = ${rataRataNilai}\nGrade = C` :
                        (rataRataNilai <= 70) && (rataRataNilai > 60) ? `Rata-rata = ${rataRataNilai}\nGrade = D` : 
                        `Rata-rata = ${rataRataNilai}\nGrade = E`)
        } else {
            console.log('Data harus number')
        }      
    } else {
        console.log("Semua data nilai harus diisi")
    }
}

avgUN([78, 65, 98, 85])
avgUN([])
avgUN([89, 55])
avgUN(['tujuh puluh enam', 78, 81, 43])