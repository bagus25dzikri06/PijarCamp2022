import fetch from "node-fetch"

const getUsers = async (url) => {
    await fetch(url)
        .then(result => result.json())
        .then(result => {
            result.map(user => {
                console.log('User ' + user.id + ' is ' + user.name)
            })
        })
}

getUsers('https://jsonplaceholder.typicode.com/users')