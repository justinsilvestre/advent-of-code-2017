const { readFileSync } = require('fs')

console.log('day 01:', require('./day01')(readFileSync('./day01.txt', 'utf8')))
console.log('day 02:', require('./day02')(readFileSync('./day02.txt', 'utf8')))
