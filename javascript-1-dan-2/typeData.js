function typeData(x) {
    if (typeof x === 'number') {
        return 'Data type: Number'
    } else if (typeof x === 'string'){
        return 'Data type: String'
    } else if (typeof x === 'boolean'){
        return 'Data type: Boolean'
    } else if (typeof x === 'undefined'){
        return 'Data type: Undefined'
    } else {
        return 'Data type: Object'
    }
}

console.log(typeData(11))
console.log(typeData('Wilujeng Sumping'))

let isSaved = true
console.log(typeData(isSaved))

let nama = undefined
console.log(typeData(nama))