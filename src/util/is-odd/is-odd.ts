import { type Int, int } from '../int'
import { mod } from '../mod'

/**
 * Возвращает логическое значение, указывающее является ли число **x**
 * нечетным.
 * @param x произвольное число
 * @example
 * console.log(isOdd(int(1)))   // true
 * console.log(isOdd(int(-1)))  // true
 * console.log(isOdd(int(2)))   // false
 * console.log(isOdd(int(-2)))  // false
 */
function isOdd(x: Int): boolean {
  return mod(int(Math.abs(x.value)), int(2)).value !== 0
}

export default isOdd
