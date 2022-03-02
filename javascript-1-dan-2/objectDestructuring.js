let data = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org'
}, data1 = {
    ...data,
    name: 'Bagus Dzikri Hidayat',
    email: 'bagusdzikri@gmail.com',
    hobbies: 'Reading, listening to the music, browsing'
}

const alamat = {
    ...data
}
const { address } = alamat

const user = {
    getUser: () => {
        return 'List user'
    },
    inserttUser: () => {
        return 'Insert user'
    },
    insertThenGet: () => {
        let insert = user.inserttUser(), list = user.getUser()
        return insert + ' ' + list
    }
}
const { getUser, insertThenGet} = user

console.log(getUser())
console.log(insertThenGet())

//Jawaban Task No. 1
console.log(data1.name + ', ' + data1.email + ', ' + data1.hobbies)

//Jawaban Task No. 2
console.log(address.street + ', ' + address.city)