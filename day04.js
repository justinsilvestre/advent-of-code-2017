module.exports = function highEntropyPassphrases(input) {
  const words = input.trim().split(' ')
  return words.length === new Set(words).size
}
