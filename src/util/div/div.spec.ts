import { assert } from 'chai'
import { describe, it } from 'mocha'
import div from './div'
import { int } from '../int'

describe('Тест функции "div"', () => {
  it('3 div 2 = 1', () => {
    assert.equal(div(int(3), int(2)).value, 1)
  })
  it('-3 div 2 = -2', () => {
    assert.equal(div(int(-3), int(2)).value, -2)
  })
  it('3 div -2 = -2', () => {
    assert.equal(div(int(3), int(-2)).value, -2)
  })
  it('-3 div -2 = 1', () => {
    assert.equal(div(int(-3), int(-2)).value, 1)
  })
})
