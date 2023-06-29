import { singleton } from '../singleton'

declare const uniqueSymbol: unique symbol

/**
 * Класс, представляющий отсутствие значения.
 */
@singleton
class Void {
  // @ts-expect-error Поле, гарантирующее уникальность типа.
  readonly [uniqueSymbol]: never
}

export default Void
