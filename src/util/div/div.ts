import { type Int, int } from '../int'
import { mod } from '../mod'

/**
 * Возвращает результат "целочисленного" деления числа "x" на "y".
 * @param x произвольное целое число
 * @param y произвольное целое число
 * @example
 * console.log(div(int(3), int(2)).value)   // 1
 * console.log(div(int(-3), int(2)).value)  // -2
 * console.log(div(int(3), int(-2)).value)  // -2
 * console.log(div(int(-3), int(-2)).value) // 1
 */
function div(x: Int, y: Int): Int {
  return int((x.value - mod(x, y).value) / y.value)
}

export default div
