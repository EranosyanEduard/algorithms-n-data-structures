import { Void } from '../void'

declare const uniqueSymbol: unique symbol

/**
 * Класс, представляющий "ленивое" значение.
 */
class Lazy<T> implements IMyType<T> {
  // @ts-expect-error Поле, гарантирующее уникальность типа.
  readonly [uniqueSymbol]: never
  // Определить поле в конструкторе класса.
  readonly value!: T

  constructor(f: Factory<T>) {
    const VOID = new Void()
    let value: T | Void = VOID

    Object.defineProperty(this, 'value', {
      get(): T {
        if (value === VOID) value = f()
        // Безопасное утверждение типа.
        return value as T
      }
    })
  }

  flatMap<U>(f: (v: T) => Lazy<U>): Lazy<U> {
    return new Lazy(() => f(this.value).value)
  }

  map<U>(f: (v: T) => U): Lazy<U> {
    return new Lazy(() => f(this.value))
  }
}

/**
 * Функция-конструктор класса Lazy.
 */
const lazy = <T>(f: Factory<T>): Lazy<T> => new Lazy(f)

export default Lazy
export { lazy }
