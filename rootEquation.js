const readline = require('readline')
const inputArr = []

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.on('line', line => {
	inputArr.push(line)
}).on('close', () => {
	const [a, b, c] = inputArr.map(input => parseInt(input))
	if (c < 0) {
		return console.log('NO SOLUTION')
	}
	if (a === 0 && (b === c ** 2 || (0 - b) === c ** 2)) {
		return console.log('MANY SOLUTIONS')
	} else if (a === 0 && (b !== c ** 2 || (0 - b) !== c ** 2)) {
		return console.log('NO SOLUTION')
	}
	const result = Number.isInteger((c ** 2 - b) / a) ? (c ** 2 - b) / a : 'NO SOLUTION'
	console.log(result)
})
