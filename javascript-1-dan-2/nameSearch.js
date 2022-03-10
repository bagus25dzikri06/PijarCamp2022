const searchName = (nameSubstring, totalName, names, results) => {
    let nameResults = []
    for (let i = 0; i < names.length; i++) {
        if ( names[i].toLowerCase().includes(nameSubstring) === true ) {
            nameResults.push(names[i])
        } else {
            continue
        }
    }

    return limitedResults(totalName, nameResults, results)
}

const limitedResults = (total, resultArray, callback) => {
    let limitedResult = []
    for (let i = 0; i < total; i++) {
        limitedResult.push(resultArray[i])
    }
    return callback(limitedResult)
}

const results = (arr) => {
    return arr
}

console.log(searchName('an', 3, [
    'Abigail', 'Alexandra', 'Alison', 'Amanda',
    'Angela', 'Bella', 'Carol', 'Caroline',
    'Carolyn', 'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
], results))