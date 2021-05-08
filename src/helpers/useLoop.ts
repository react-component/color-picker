import { useCallback, useState } from 'react'

export type Next = () => void

/**
 * React hook for looping through an array.
 */
const useLoop = <T>(arr: readonly T[]): [T, Next] => {
  const [current, setCurrent] = useState(0)
  const next = useCallback<Next>(() => {
    setCurrent(current => current + 1 < arr.length ? current + 1 : 0)
  }, [arr])
  return [arr[current], next]
}

export default useLoop
