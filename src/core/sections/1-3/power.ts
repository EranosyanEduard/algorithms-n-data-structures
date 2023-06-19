import { MyMath } from '@/util'

/**
 * Возвращает результат возведения в степень **n** числа **x**, если n - целое
 * неотрицательное число, иначе - NaN.
 * @param x произвольное число
 * @param n степень числа
 * @example
 * console.log(power(2, int(5)))   // 32
 * console.log(power(2, int(-1)))  // NaN
 */
function power(x: number, n: MyMath.Int): number {
  if (n.value < 0) {
    return NaN
  }

  let y = 1

  while (n.value > 0) {
    if (MyMath.isOdd(n)) {
      y *= x
    }
    x *= x
    n = MyMath.div(n, MyMath.int(2))
  }

  return y
}

export default power
