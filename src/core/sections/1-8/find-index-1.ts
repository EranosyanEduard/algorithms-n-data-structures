/* Линейный поиск */

import { MyMath } from '@/util'

/**
 * Возвращает индекс 1-го элемента массива **arr**, для которого функция **p**
 * вернет логическое значение **true**, или -1, если такой элемент отсутствует.
 * @param arr массив произвольных элементов
 * @param p обработчик элемента массива
 * @example
 * const nums = [1, 2, 3]
 * console.log(findIndex(nums, (v) => v === 2)) // 1
 * console.log(findIndex(nums, (v) => v === 0)) // -1
 */
function findIndex<T>(arr: AnyArray<T>, p: Predicate<T>): MyMath.Int {
  for (let index = 0; index < arr.length; index++) {
    // Безопасное утверждение типа "non-null-assertion".
    const element = arr[index]!
    if (p(element)) {
      return MyMath.int(index)
    }
  }
  return MyMath.int(-1)
}

export default findIndex
