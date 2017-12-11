const inverseCaptcha = require('./day01')
const corruptionChecksum = require('./day02')
const spiralMemory = require('./day03')

describe('Day 1: Inverse Captcha', () => {
  it('inverse captcha', () => {
    const examples = {
      '1122': 3,
      '1111': 4,
      '1234': 0,
      '91212129': 9,
    }

    const actual = Object.keys(examples).reduce((all, string) => {
      all[string] = inverseCaptcha(string)
      return all
    }, {})

    expect(examples).toEqual(actual)
  })
})

describe('Day 2: Corruption Checksum', () => {
  it('finds the spreadsheet\'s checksum', () => {
    const example = `5 1 9 5
7 5 3
2 4 6 8`

  expect(corruptionChecksum(example)).toEqual(18)
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

    const actual = Object.keys(examples).reduce((all, string) => {
      all[string] = spiralMemory(string)
      return all
    }, {})

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

    const actual = Object.keys(examples).reduce((all, string) => {
      all[string] = highEntropyPassphrases(string)
      return all
    }, {})
    expect(examples).toEqual(actual)
  })
})
