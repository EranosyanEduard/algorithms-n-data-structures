declare const uniqueSymbol: unique symbol

/**
 * Класс, представляющий целое число.
 */
class Int implements IMyType<number> {
  // @ts-expect-error Поле, гарантирующее уникальность типа.
  readonly [uniqueSymbol]: never

  /**
   * Сконструировать экземпляр класса **Int**.
   * @param v целое число
   */
  static new(v: number): Int | never {
    if (Number.isInteger(v)) {
      return new Int(v)
    }
    throw new Error(`Значение аргумента v не соответствует типу Int`)
  }

  private constructor(readonly value: number) {}
}

/**
 * Функция-конструктор типа Int.
 */
const int: (typeof Int)['new'] = Int.new

export default Int
export { int }
