const OPERATIONS = {
  '>': (a, b) => a > b,
  '<': (a, b) => a < b,
  '>=': (a, b) => a >= b,
  '<=': (a, b) => a <= b,
  '==': (a, b) => a == b,
  '!=': (a, b) => a != b,
}

module.exports = function iHearYouLikeRegisters(input) {
  const lines = input.trim().split('\n')
  const register = {}
  const getValue = identifier => register[identifier] || 0

  lines.forEach(line => {
    const [changedKey, action, magnitude, , operand1, operation, operand2] = line.split(' ')
    if (OPERATIONS[operation](getValue(operand1), operand2)) {
      const direction = action === 'inc' ? 1 : -1
      const addition = direction * Number(magnitude)
      register[changedKey] = (register[changedKey] || 0) + addition
    }
  })

  return Math.max(...Object.values(register))
}
