const searchName = (substringNama, jumlahNama, arrayNama, limitedArray, capitalizedArr) => {
    let dataNama = []
    let arrayNamainLowercase = arrayNama.map((e) => {
        return e.toLowerCase()
    })
    for (let i = 0; i < arrayNamainLowercase.length; i++) {
        if ( arrayNamainLowercase[i].includes(substringNama) === true ) {
            dataNama.push(arrayNamainLowercase[i])
        } else {
            continue
        }
    }

    limitedArray(dataNama, jumlahNama, capitalizedArr)
}

const limitedArray = (arr, num, capitalizedArr) => {
    let limitArr = []
    for (let i = 0; i < num; i++) {
        limitArr.push(arr[i])
    } 
    capitalizedArr(limitArr)
}

const capitalizedArr = (arr) => {
    console.log(arr.map((e) => {
        return e.charAt(0).toUpperCase() + e.substring(1)
    }))
}

searchName('an', 3, [
    'Abigail', 'Alexandra', 'Alison', 'Amanda',
    'Angela', 'Bella', 'Carol', 'Caroline',
    'Carolyn', 'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
], limitedArray, capitalizedArr)