const request = require('request'), util = require('util')
let url = "https://jsonplaceholder.typicode.com/users"

// Use the util to promisify the request method
const getUsers = util.promisify(request);

// Use the new method to call the API in a modern then/catch pattern
getUsers(url).then(data => {
   let users = JSON.parse(data.body)
   for (let i = 0; i < users.length; i++) {
      console.log(`User ${users[i].id}: ${users[i].name}`) // actually outputs strings in a looping
   }
}).catch(err => console.log('error: ', err))