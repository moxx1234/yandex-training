const readline = require('readline')

const inputArr = []
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.on('line', (line) => {
	inputArr.push(line)
}).on('close', () => {
	let result = 'YES'
	const [a, b, c] = inputArr.map(side => parseInt(side))
	if ((a + b) <= c) {
		result = 'NO'
	}
	if ((b + c) <= a) {
		result = 'NO'
	}
	if ((a + c) <= b) {
		result = 'NO'
	}
	console.log(result)
})