/* Поиск образца в строке, алгоритм "Кнута-Морриса-Пратта" */

import { MyMath } from '@/util'

/**
 * Возвращает индекс 1-го вхождения образца **pattern** в строку **text**,
 * иначе - -1.
 * @param text произвольная строка
 * @param pattern образец
 * @example
 * const TEXT = 'Привет, мир!'
 * console.log(findIndex(TEXT, 'мир').value) // 8
 * console.log(findIndex(TEXT, 'Мир').value) // -1
 */
function findIndex(text: string, pattern: string): MyMath.Int {
  const DISLOCATION_FLAG = -1
  const dislocations: number[] = [
    DISLOCATION_FLAG,
    pattern[0] === pattern[1] ? DISLOCATION_FLAG : 0
  ]
  let i = 0
  let j = 1
  let k = 0

  // Определить размеры допустимых смещений.
  while (j < pattern.length - 1) {
    if (k >= 0 && pattern[j] !== pattern[k]) {
      k = dislocations[k] ?? NaN
    } else {
      j += 1
      k += 1
      dislocations[j] = pattern[j] === pattern[k] ? dislocations[k] ?? NaN : k
    }
  }

  j = 0

  // Поиск.
  while (i < text.length && j < pattern.length) {
    if (j === DISLOCATION_FLAG || text[i] === pattern[j]) {
      i += 1
      j += 1
    } else {
      j = dislocations[j] ?? NaN
    }
  }

  return j === pattern.length ? MyMath.int(i - j) : MyMath.int(-1)
}

export default findIndex
