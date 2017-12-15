module.exports = function cyclesCount(input) {
  const banks = input.trim().split(/\s+/).map(Number)
  const lastBankIndex = banks.length - 1
  let cycles = 0
  const distributions = new Set()

  do {
    distributions.add(banks.toString())
    let blocksToRedestribute = Math.max(...banks)
    let index = banks.indexOf(blocksToRedestribute)
    banks[index] = 0
    while (blocksToRedestribute) {
      index = index === lastBankIndex ? 0 : (index + 1)
      banks[index] += 1
      blocksToRedestribute -= 1
    }
    cycles += 1
  } while (!distributions.has(banks.toString()))

  return cycles
}
