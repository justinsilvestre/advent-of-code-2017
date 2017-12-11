module.exports = function inverseCaptcha(input) {
  return ([...input]).reduce((matches, character, i) => {
    const nextCharacterIndex = i === input.length - 1 ? 0 : i + 1
    const isMatch = character === input[nextCharacterIndex]
    return isMatch ? matches + Number(character) : matches
  }, 0)
}
