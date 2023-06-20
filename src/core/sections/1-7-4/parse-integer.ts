import { MyChar, MyMath } from '@/util'

/**
 * Возвращает целое число, извлеченное из строки **str**.
 * @param str произвольная строка
 * @example
 * console.log(parseInteger('123').value)    // 123
 * console.log(parseInteger('123abc').value) // 123
 * console.log(parseInteger('abc123').value) // 0
 */
function parseInteger(str: string): MyMath.Int {
  const MAX_CHAR_CODE = MyChar.char('9').code
  const MIN_CHAR_CODE = MyChar.char('0').code
  let num = 0

  for (let index = 0; index < str.length; index++) {
    // Безопасное утверждение типа "non-null-assertion".
    const charCode = MyChar.char(str[index]!).code

    if (charCode < MIN_CHAR_CODE || charCode > MAX_CHAR_CODE) {
      break
    }

    num = 10 * num + (charCode - MIN_CHAR_CODE)
  }

  return MyMath.int(num)
}

export default parseInteger
