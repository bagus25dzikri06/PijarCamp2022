const avgUN = (dataNilai) => {
    let totalNilai = 0
    if (dataNilai.length === 4) {
        for (let i = 0; i < dataNilai.length; i++) {
            totalNilai += dataNilai[i]
        }

        rataRataNilai = totalNilai / dataNilai.length
        console.log((rataRataNilai <= 100) && (rataRataNilai >= 90) ? `Rata-rata = ${rataRataNilai}\nGrade = A` : 
                    (rataRataNilai <= 89) && (rataRataNilai >= 80) ? `Rata-rata = ${rataRataNilai}\nGrade = B` :
                    (rataRataNilai <= 79) && (rataRataNilai >= 70) ? `Rata-rata = ${rataRataNilai}\nGrade = C` :
                    (rataRataNilai <= 69) && (rataRataNilai >= 60) ? `Rata-rata = ${rataRataNilai}\nGrade = D` : 
                    `Rata-rata = ${rataRataNilai}\nGrade = E`)      
    } else if (dataNilai.length === 0) {
        console.log("Data nilai harus diisi")
    } else {
        console.log("Jumlah data nilai masih belum memenuhi")
    }
}

avgUN([78, 65, 98, 85])
avgUN([])
avgUN([89, 55])