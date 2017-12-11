const inverseCaptcha = require('./day01')

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
