/**
 * Сделать класс **Constructor** - синглтоном, т.е классом, имеющим
 * единственный экземпляр.
 * @param Constructor декорируемый класс
 */
function singleton<T extends ConstructorMixin<object>>(Constructor: T): T {
  const SINGLETON = {}
  let instance: T | typeof SINGLETON = SINGLETON

  return new Proxy(Constructor, {
    construct(Target, args) {
      if (instance === SINGLETON) {
        instance = new Target(...args)
      }
      return instance
    }
  })
}

export default singleton
