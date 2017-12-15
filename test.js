const mapObject = (examples, fn) => Object.keys(examples).reduce((result, string) => {
  result[string] = fn(string)
  return result
}, {})

describe('Day 1: Inverse Captcha', () => {
  it('inverse captcha', () => {
    const examples = {
      '1122': 3,
      '1111': 4,
      '1234': 0,
      '91212129': 9,
    }

    const actual = mapObject(examples, require('./day01'))

    expect(examples).toEqual(actual)
  })
})

describe('Day 2: Corruption Checksum', () => {
  it('finds the spreadsheet\'s checksum', () => {
    const example = `5 1 9 5
7 5 3
2 4 6 8`

  expect(require('./day02')(example)).toEqual(18)
  })
})

describe('Day 3: Spiral Memory', () => {
  it('finds distance from "center"', () => {
    const examples = {
      '1': 0,
      '12': 3,
      '23': 2,
      '1024': 31,
    }

    const actual = mapObject(examples, require('./day03'))

    expect(examples).toEqual(actual)
  })
})

describe('Day 4: High-Entropy Passphrases', () => {
  it ('identifies valid passphrases', () => {
    const examples = {
      'aa bb cc dd ee': true,
      'aa bb cc dd aa': false,
      'aa bb cc dd aaa': true,
    }
    const highEntropyPassphrases = require('./day04')

    const actual = mapObject(examples, highEntropyPassphrases)
    expect(examples).toEqual(actual)
  })
})

describe('Day 5: A Maze of Twisty Trampolines, All Alike', () => {
  it('finds the number of steps till escape', () => {
    const example = '0\n3\n0\n1\n-3'

    expect(require('./day05')(example)).toEqual(5)
  })
})

describe('Day 6: Memory Reallocation', () => {
  it('finds the number of steps till escape', () => {
    const example = '0 2 7 0'

    expect(require('./day06')(example)).toEqual(5)
  })
})


describe('Day 7: Recursive Circus', () => {
  it('finds the name of the bottom program', () => {
    const example = `pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`

    expect(require('./day07')(example)).toEqual('tknk')
  })
})

describe('Day 8: I Heard You Like Registers', () => {
  it('finds the largets value in registers after all modifications', () => {
    const example = `b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`

    expect(require('./day08')(example)).toEqual(1)
  })
})
