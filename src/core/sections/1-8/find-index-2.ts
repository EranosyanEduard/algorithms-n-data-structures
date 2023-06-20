/* Поиск делением пополам (бинарный поиск) */

import { MyMath } from '@/util'

/**
 * Возвращает индекс 1-го элемента массива **arr**, для которого функция
 * **compare** вернет значение **0**, или -1, если такой элемент отсутствует.
 * @param arr массив произвольных элементов
 * @param compare обработчик элемента массива
 * @example
 * const nums = [1, 2, 3]
 * console.log(findIndex(nums, (v) => v - 2)) // 1
 * console.log(findIndex(nums, (v) => v - 0)) // -1
 */
function findIndex<T>(arr: AnyArray<T>, compare: Comparator<T>): MyMath.Int {
  let start = 0
  let end = arr.length

  while (start < end) {
    const index = MyMath.div(MyMath.int(start + end), MyMath.int(2)).value
    // Безопасное утверждение типа "non-null-assertion".
    if (compare(arr[index]!) < 0) {
      start = index + 1
    } else {
      end = index
    }
  }
  // Безопасное утверждение типа "non-null-assertion".
  if (end === arr.length || compare(arr[end]!) !== 0) {
    return MyMath.int(-1)
  }
  return MyMath.int(end)
}

export default findIndex
