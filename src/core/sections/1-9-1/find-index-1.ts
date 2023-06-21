/* Поиск образца в строке, "наивная" реализация */

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
  const LIMIT = text.length - pattern.length

  for (let i = 0; i <= LIMIT; i++) {
    let j = 0

    while (j < pattern.length && text[i + j] === pattern[j]) {
      j += 1
    }

    if (j === pattern.length) {
      return MyMath.int(i)
    }
  }

  return MyMath.int(-1)
}

export default findIndex
