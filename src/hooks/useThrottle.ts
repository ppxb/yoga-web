import { reactive, watchEffect } from 'vue'

const useThrottle = <T extends unknown[]>(
  fn: (...args: T) => void,
  delay: number
) => {
  const timer: any = null
  const current = reactive({ fn, timer })

  watchEffect(() => {
    current.fn = fn
  })

  return (...args: T) => {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        current.timer = null
      }, delay)
      current.fn(...args)
    }
  }
}

export default useThrottle
