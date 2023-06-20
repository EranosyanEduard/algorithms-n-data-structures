import { assert } from 'chai'
import { describe, it } from 'mocha'
import Char, { char } from './Char'
import { int } from '../int'

describe('Тест функции "char"', () => {
  describe('"Допустимые" случаи', () => {
    it('char(a)', () => {
      const a = char('a')
      assert.instanceOf(a, Char, 'instanceOf')
      assert.equal(a.value, 'a', 'equal')
    })
    it('char(97)', () => {
      const a = char(int(97))
      assert.instanceOf(a, Char, 'instanceOf')
      assert.equal(a.value, 'a', 'equal')
    })
  })
  it('"Недопустимый" случай', () => {
    assert.throw(
      () => char(''),
      'Значение аргумента v не соответствует типу Char',
      undefined,
      'пустая строка'
    )
    assert.throw(
      () => char('ab'),
      'Значение аргумента v не соответствует типу Char',
      undefined,
      'ab'
    )
  })
})
