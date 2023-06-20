import { assert } from 'chai'
import { describe, it } from 'mocha'
import parseInteger from './parse-integer'

describe('Тест функции "parseInteger"', () => {
  it('parseInteger("123") = 123', () => {
    assert.equal(parseInteger('123').value, 123)
  })
  it('parseInteger("123abc") = 123', () => {
    assert.equal(parseInteger('123abc').value, 123)
  })
  it('parseInteger("abc123") = 0', () => {
    assert.equal(parseInteger('abc123').value, 0)
  })
})
