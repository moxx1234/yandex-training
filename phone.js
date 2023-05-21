const readline = require('readline')

const inputArr = []

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.on('line', line => {
	inputArr.push(line)
	if (inputArr.length < 2) return
	const [newPhone, ...phonesExists] = inputArr.map(phone => {
		let formattedPhone = phone.replace('+7', '8').replace(/[()\-+]/g, '')
		if (formattedPhone.length === 7) {
			formattedPhone = `8495${formattedPhone}`
		}
		return formattedPhone
	})
	const result = newPhone === phonesExists[phonesExists.length - 1] ? 'YES' : 'NO'
	console.log(result)
})