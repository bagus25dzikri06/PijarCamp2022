const data = require('./data'), products = require('../importExport/source/products')
const KeyEncoder = require('key-encoder').default, 
keyEncoder = new KeyEncoder('secp256k1'), 
bcrypt = require('bcrypt')

console.log(data)
console.log(products)
console.log(keyEncoder)

bcrypt.hash('JavaScript', 10, (err, hash) => {
    console.log(hash)
})