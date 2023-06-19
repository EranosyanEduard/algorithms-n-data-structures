import { type Int, int } from '../int'

/**
 * Возвращает остаток от деления числа **x** на **y**.
 * @param x произвольное целое число
 * @param y произвольное целое число
 * @example
 * console.log(mod(int(3), int(2)).value)   // 1
 * console.log(mod(int(-3), int(2)).value)  // 1
 * console.log(mod(int(3), int(-2)).value)  // -1
 * console.log(mod(int(-3), int(-2)).value) // -1
 */
function mod(x: Int, y: Int): Int {
  const isSameSign = Math.sign(x.value) === Math.sign(y.value)
  return int((x.value % y.value) + (isSameSign ? 0 : y.value))
}

export default mod
