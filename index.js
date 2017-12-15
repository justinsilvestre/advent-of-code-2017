const { readFileSync } = require('fs')

console.log('day 01:', require('./day01')(readFileSync('./day01.txt', 'utf8')))
console.log('day 02:', require('./day02')(readFileSync('./day02.txt', 'utf8')))
console.log('day 03:', require('./day03')(readFileSync('./day03.txt', 'utf8')))
const evaluatePassphrase = require('./day04')
console.log('day 04:', readFileSync('./day04.txt', 'utf8')
  .trim().split('\n')
  .reduce((sum, passphrase) => evaluatePassphrase(passphrase) ? sum + 1 : sum, 0)
)
console.log('day 05:', require('./day05')(readFileSync('./day05.txt', 'utf8')))
