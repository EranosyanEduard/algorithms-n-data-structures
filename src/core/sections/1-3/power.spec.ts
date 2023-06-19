import { assert } from 'chai'
import { describe, it } from 'mocha'
import { MyMath } from '@/util'
import power from './power'

describe('Тест функции "power"', () => {
  describe('"Допустимые" случаи', () => {
    it('0 ^ 5 = 0', () => {
      assert.equal(power(0, MyMath.int(5)), 0)
    })
    it('1 ^ 5 = 1', () => {
      assert.equal(power(1, MyMath.int(5)), 1)
    })
    it('1.5 ^ 5 = 7.59375', () => {
      assert.equal(power(1.5, MyMath.int(5)), 7.59375)
    })
    it('2 ^ 0 = 1', () => {
      assert.equal(power(2, MyMath.int(0)), 1)
    })
    it('2 ^ 5 = 32', () => {
      assert.equal(power(2, MyMath.int(5)), 32)
    })
    it('-1 ^ 2 = 1', () => {
      assert.equal(power(-1, MyMath.int(2)), 1)
    })
    it('-2 ^ 5 = -32', () => {
      assert.equal(power(-2, MyMath.int(5)), -32)
    })
  })
  describe('"Недопустимые" случаи', () => {
    it('Значение степени числа - отрицательное число', () => {
      assert.isNaN(power(2, MyMath.int(-1)))
    })
  })
})
