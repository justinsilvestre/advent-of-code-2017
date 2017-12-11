module.exports = function corruptionChecksum(input) {
  return input.trim()
    .split('\n')
    .map(rawLine => rawLine.split(/\s+/))
    .reduce((sum, rawNumbersRow) => {
      const numbersRow = rawNumbersRow.map(Number)
      const checksum = Math.max(...numbersRow) - Math.min(...numbersRow)
      return sum + checksum
    }, 0)
}
