import { type Int } from '../int'

declare const uniqueSymbol: unique symbol

/**
 * Класс, представляющий символ.
 */
class Char implements IMyType<string> {
  // @ts-expect-error Поле, гарантирующее уникальность типа.
  readonly [uniqueSymbol]: never

  /**
   * Сконструировать экземпляр класса **Char**.
   * @param v символ или код символа
   */
  static new(v: string | Int): Char | never {
    const V = typeof v === 'object' ? String.fromCharCode(v.value) : v

    if (V.length === 1) {
      return new Char(V)
    }

    throw new Error(`Значение аргумента v не соответствует типу Char`)
  }

  private constructor(readonly value: string) {}

  /**
   * Код символа.
   */
  get code(): number {
    return this.value.charCodeAt(0)
  }
}

/**
 * Функция-конструктор типа Char.
 */
const char: (typeof Char)['new'] = Char.new

export default Char
export { char }
