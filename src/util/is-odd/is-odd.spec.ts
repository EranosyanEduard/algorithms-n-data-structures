import { assert } from 'chai'
import { describe, it } from 'mocha'
import isOdd from './is-odd'
import { int } from '../int'

describe('Тест функции "isOdd"', () => {
  it('idOdd(1) = true', () => {
    assert.isTrue(isOdd(int(1)))
  })
  it('isOdd(-1) = true', () => {
    assert.isTrue(isOdd(int(-1)))
  })
  it('isOdd(2) = false', () => {
    assert.isFalse(isOdd(int(2)))
  })
  it('isOdd(-2) = false', () => {
    assert.isFalse(isOdd(int(-2)))
  })
})
