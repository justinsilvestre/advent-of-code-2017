module.exports = function streamProcessing(input) {
  let level = 0
  let garbage = false
  let escaping = false
  let score = 0;

  [...input].forEach((char, i) => {
    if (escaping) {
      escaping = false
      return
    }

    if (garbage) {
      switch(char) {
        case '>':
        case '!':
          break
        default:
          return
      }
    }

    switch (char) {
      case '{':
        level += 1
        return score += level
      case '}':
        return level -= 1
      case '<':
        return garbage = true
      case '>':
        return garbage = false
      case '!':
        return escaping  = true
      default:
        return
    }
  })
  return score
}
