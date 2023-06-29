/**
 * Тип, представляющий функцию-конструктор.
 */
type ConstructorMixin<R> = new (...args: any[]) => R
