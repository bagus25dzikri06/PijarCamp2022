function luasLingkaran(x) {
    return x % 7 === 0 ? ((22 * x * x ) / 7) : (3.14 * x * x)
}

function kelilingLingkaran(x) {
    var d = 2 * x
    return d % 7 === 0 ? ((22 * d ) / 7) : (3.14 * d)
}

console.log(luasLingkaran(28))
console.log(kelilingLingkaran(28))
console.log(luasLingkaran(15))
console.log(kelilingLingkaran(15))