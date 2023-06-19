import { assert } from 'chai'
import { describe, it } from 'mocha'
import mod from './mod'
import { int } from '../int'

describe('Тест функции "mod"', () => {
  it('3 mod 2 = 1', () => {
    assert.equal(mod(int(3), int(2)).value, 1)
  })
  it('-3 mod 2 = 1', () => {
    assert.equal(mod(int(-3), int(2)).value, 1)
  })
  it('3 mod -2 = -1', () => {
    assert.equal(mod(int(3), int(-2)).value, -1)
  })
  it('-3 mod -2 = -1', () => {
    assert.equal(mod(int(-3), int(-2)).value, -1)
  })
})
