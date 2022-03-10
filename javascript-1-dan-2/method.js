const object = {
    getUser: () => {
        return ['Udin', 'Dani', 'Reza']
    }
}

const object1 = {
    getCar: () => {
        return ['Skoda', 'Bentley', 'Opel']
    },
    name: () => {
        return {
            nama: 'Bagus Dzikri Hidayat',
            alamat: 'Bumi Sawangan Indah B2A/6'
        }
    },
    getUser: (index) => {
        users = ['Udin', 'Dani', 'Reza'] 
        return users[index]
    }
}

console.log(object.getUser())
console.log(object1.getCar())
console.log(object1.name())