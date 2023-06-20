import { assert } from 'chai'
import { describe, it } from 'mocha'
import findIndex from './find-index-1'

describe('Тест функции "findIndex"', () => {
  /**
   * Количество цифр.
   * @constant
   */
  const TOTAL_DIGITS = 10
  /**
   * Массив, элементами которого являются 10 цифр, расположенных в порядке
   * возрастания.
   * @constant
   */
  const DIGITS: readonly number[] = Array.from(
    { length: TOTAL_DIGITS },
    (_, index) => index
  )

  it('Массив содержит аргумент поиска', () => {
    assert.equal(findIndex(DIGITS, (element) => element === 3).value, 3)
  })
  it('Массив не содержит аргумент поиска', () => {
    assert.equal(findIndex(DIGITS, (element) => element === 10).value, -1)
  })
  it('Функция возвращает индекс 1-го элемента массива, который прошел проверку', () => {
    assert.equal(
      findIndex(DIGITS.concat(DIGITS), (element) => element === 3).value,
      3
    )
  })
})
