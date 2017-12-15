module.exports = function stepsTillEscape(input) {
  const numbers = input.trim().split('\n').map(Number)
  let position = 0
  let steps = 0
  while (0 <= position && position < numbers.length) {
    const offset = numbers[position]
    numbers[position] += 1
    position += offset
    steps += 1
  }
  return steps
}
