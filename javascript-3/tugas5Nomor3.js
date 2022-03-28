const divideAndSort = (num, callback1, callback2) => {
    if (typeof num === 'number') {
        let numString = num.toString(), 
        numBigString = BigInt(num).toString(), 
        numArr = numString.split('0'), 
        numBigArr = numBigString.split('0')

        if (numString.length <= 16 && numString.split('').includes('0') === true) {
            callback1(numArr, callback2)
        } else if (numBigString.split('').includes('0') === true) {
            callback1(numBigArr, callback2)
        } else {
            console.log(`Number ${num} can't be divided and sorted`)
        }
    } else {
        console.log(`Sorry, data type must be number. Thank you`)
    }
}

const pushAndJoin = (arr, callback) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]))
    }
    console.log(newArr.join(''))
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

divideAndSort(5956560159466056, pushAndJoin, splitSortAndJoin)
divideAndSort(9907199254740999, pushAndJoin, splitSortAndJoin)
divideAndSort(99999099999099999099999099999099999099999099999099999099999099999099999, pushAndJoin, splitSortAndJoin)
divideAndSort(17812919, pushAndJoin, splitSortAndJoin)
divideAndSort('17812919', pushAndJoin, splitSortAndJoin)