import { assert } from 'chai'
import { describe, it } from 'mocha'
import Int, { int } from './Int'

describe('Тест функции "int"', () => {
  it('"Допустимый" случай', () => {
    const zero = int(0)
    assert.instanceOf(zero, Int, 'instanceOf')
    assert.equal(zero.value, 0, 'equal')
  })
  it('"Недопустимый" случай', () => {
    assert.throw(
      () => int(NaN),
      'Значение аргумента v не соответствует типу Int',
      undefined,
      'NaN'
    )
    assert.throw(
      () => int(0.5),
      'Значение аргумента v не соответствует типу Int',
      undefined,
      '0.5'
    )
  })
  it('Тест метода "string"', () => {
    const stringifyNegativeX = int(-123).to.string()
    const stringifyPositiveX = int(123).to.string()

    assert.isString(stringifyNegativeX, 'isString')
    assert.equal(stringifyNegativeX, '-123', 'equal')

    assert.isString(stringifyPositiveX, 'isString')
    assert.equal(stringifyPositiveX, '123', 'equal')
  })
})
