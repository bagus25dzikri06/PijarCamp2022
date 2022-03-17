const divideAndSort = (num, callback) => {
    let numString = num.toString(), numArr, sortedNumArr = []
    if (numString.split('').includes('0') === true) {
        numArr = numString.split('0')
        for (let i = 0; i < numArr.length; i++) {
            sortedNumArr.push(callback(numArr[i]))
        }
        console.log(sortedNumArr.join(''))
    } else {
        console.log(`Angka ${num} tidak dapat dibagi dan diurut`)
    }
}

const splitSortAndJoin = (angka) => {
    return angka.split('')
    .map((e) => {
        return parseInt(e)
    })
    .sort((a, b) => {
        return a - b
    })
    .map((e) => {
        return e.toString()
    })
    .join('')
}

divideAndSort(5956560159466056, splitSortAndJoin)
divideAndSort(17812919, splitSortAndJoin)