import { assert } from 'chai'
import { describe, it } from 'mocha'
import Char, { char } from './Char'

describe('Тест функции "char"', () => {
  it('"Допустимый" случай', () => {
    const a = char('a')
    assert.instanceOf(a, Char, 'instanceOf')
    assert.equal(a.value, 'a', 'equal')
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
