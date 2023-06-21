import { assert } from 'chai'
import { describe, it } from 'mocha'
import findIndex from './find-index-1'

describe('Тест функции "findIndex"', () => {
  /**
   * Строка, в которой необходимо найти образец.
   * @constant
   */
  const TEXT = 'Привет, мир!'

  it('Строка содержит образец', () => {
    assert.equal(
      findIndex(TEXT, 'мир').value,
      8,
      'Длина образца < Длина текста'
    )
    assert.equal(findIndex(TEXT, TEXT).value, 0, 'Длина образца = Длина текста')
  })
  it('Строка не содержит образец', () => {
    assert.equal(
      findIndex(TEXT, 'Мир').value,
      -1,
      'Длина образца <= Длина текста'
    )
    assert.equal(
      findIndex(TEXT, `${TEXT}!!`).value,
      -1,
      'Длина образца > Длина текста'
    )
  })
})
