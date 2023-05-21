const readline = require('readline')
const fs = require('fs')
const inputArr = []

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.on('line', line => {
	inputArr.push(...line.split(' '))
})

rl.on('close', () => {
	const modes = {
		heat: (troom, tcond) => {
			if (parseInt(troom) >= parseInt(tcond)) {
				return troom
			}
			return tcond
		},
		freeze: (troom, tcond) => {
			if (parseInt(troom) <= parseInt(tcond)) {
				return troom
			}
			return tcond
		},
		auto: (troom, tcond) => {
			if (parseInt(troom) > parseInt(tcond)) {
				return modes.freeze(troom, tcond)
			} else if (troom < tcond) {
				return modes.heat(troom, tcond)
			} else {
				return troom
			}
		},
		fan: (troom, tcond) => {
			return troom
		},
	}

	const [roomTemp, desiredTemp, mode] = inputArr
	const result = modes[mode](roomTemp, desiredTemp)

	fs.writeFile('output.txt', result, err => {
		if (err) throw err
	})
})