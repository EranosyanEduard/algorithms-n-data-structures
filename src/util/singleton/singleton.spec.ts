import { assert } from 'chai'
import { describe, it } from 'mocha'
import singleton from './singleton'

describe('Тест декоратора "singleton"', () => {
  it('Класс A - синглтон', () => {
    @singleton
    class A {}
    const instance = new A()

    assert.instanceOf(instance, A, 'instanceOf')
    assert.strictEqual(instance, new A(), 'strictEqual')
  })
})
