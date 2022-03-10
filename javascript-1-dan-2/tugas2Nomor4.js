let data = {
    id: 1,
	name: "Leanne Graham",
	username: "Bret",
	email: "Sincere@april.biz",
	address: 
	{
		street: "Kulas Light",
		suite: "Apt. 556",
		city: "Gwenborough",
		zipcode: "92998-3874",
	},
	phone: "1-770-736-8031 x56442",
	website: "hildegard.org",   
}

//a. Ganti data nama, e-mail dan hobi menggunakan spread operator
let dataBaru = {
    ...data,
    name: 'Bagus Dzikri Hidayat',
    email: 'bagusdzikri@gmail.com',
    hobby: ['Reading', 'listening to the music', 'browsing']
}

console.log(dataBaru)

//b. Ambillah data “street dan city” tersebut menggunakan destructuring
const { address } = dataBaru

console.log(address.street)
console.log(address.city)