import { assert } from 'chai'
import { describe } from 'mocha'
import Lazy, { lazy } from './Lazy'

describe('Тест класса "Lazy"', () => {
  it('Тест конструктора', function () {
    const f = (): any => ''
    assert.instanceOf(new Lazy(f), Lazy, 'Класс')
    assert.instanceOf(lazy(f), Lazy, 'Функция')
  })

  describe('Значение', () => {
    const doNothing = (_: unknown): void => {}
    let lazyValue: Lazy<typeof value>
    let value: number

    beforeEach(function () {
      value = 0
      lazyValue = lazy(() => ++value)
    })

    it('Значение не вычисляется при вызове конструктора', function () {
      assert.equal(value, 0)
    })
    it('Значение вычисляется при обращении к полю **value**', function () {
      doNothing(lazyValue.value)
      assert.equal(value, 1)
    })
    it('Значение вычисляется при обращении к полю **value** однажды', function () {
      doNothing(lazyValue.value)
      doNothing(lazyValue.value)
      assert.equal(value, 1)
    })
    it('Метод value возвращает актуальное значение', function () {
      assert.equal(lazyValue.value, 1)
    })
  })
  describe('Тест метода "flatMap"', () => {
    let a: number, b: string, lazyA: Lazy<typeof a>, lazyB: Lazy<typeof b>

    beforeEach(function () {
      a = 0
      b = ''
      lazyA = new Lazy(() => ++a)
      lazyB = lazyA.flatMap((num) => new Lazy(() => (b = num.toString())))
    })

    it('Метод flatMap возвращает новый экземпляр класса Lazy', function () {
      assert.notEqual<Lazy<any>>(lazyA, lazyB)
    })
    it('Значение экземпляра lazyA не вычисляется при вызове метода flatMap', function () {
      assert.equal(a, 0)
    })
    it('Значение экземпляра lazyB не вычисляется при вызове метода flatMap', function () {
      assert.equal(b, '')
    })
    it('Значение экземпляра lazyB вычисляется на основе ф-ии, переданной на вход методу flatMap', function () {
      assert.equal(lazyB.value, '1')
    })
  })
  describe('Тест метода "map"', () => {
    let a: number, b: string, lazyA: Lazy<typeof a>, lazyB: Lazy<typeof b>

    beforeEach(function () {
      a = 0
      b = ''
      lazyA = new Lazy(() => ++a)
      lazyB = lazyA.map((num) => (b = num.toString()))
    })

    it('Метод map возвращает новый экземпляр класса Lazy', function () {
      assert.notEqual<Lazy<any>>(lazyA, lazyB)
    })
    it('Значение экземпляра lazyA не вычисляется при вызове метода map', function () {
      assert.equal(a, 0)
    })
    it('Значение экземпляра lazyB не вычисляется при вызове метода map', function () {
      assert.equal(b, '')
    })
    it('Значение экземпляра lazyB вычисляется на основе ф-ии, переданной на вход методу map', function () {
      assert.equal(lazyB.value, '1')
    })
  })
})
