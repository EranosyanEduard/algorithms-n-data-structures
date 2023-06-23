import { char } from '../char'
import { div } from '../div'
import { mod } from '../mod'

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

  readonly to = {
    boolean: this.boolean.bind(this),
    string: this.string.bind(this)
  }

  private constructor(readonly value: number) {}

  /**
   * Возвращает логическое представление целого числа.
   */
  private boolean(): boolean {
    return this.value !== 0
  }

  /**
   * Возвращает строковое представление целого числа.
   */
  private string(): string {
    const { value } = this
    const DIVIDER = Int.new(10)
    const MIN_CHAR_CODE = char('0').code
    const SIGN = Math.sign(value) < 0 ? '-' : ''
    let int = Int.new(Math.abs(value))
    let stringifyValue = ''

    while (int.value !== 0) {
      const character = char(Int.new(mod(int, DIVIDER).value + MIN_CHAR_CODE))
      stringifyValue = `${character.value}${stringifyValue}`
      int = div(int, DIVIDER)
    }

    return `${SIGN}${stringifyValue}`
  }
}

/**
 * Функция-конструктор типа Int.
 */
const int: (typeof Int)['new'] = Int.new

export default Int
export { int }
