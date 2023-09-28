import { useState, useRef, useEffect } from 'react'

export default function useRender() {
  const [count, setCount] = useState(0)

  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()

  const animate = (time: number) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current
      setCount((prevCount) => (prevCount + deltaTime * 0.01) % 100)
    }
    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current!)
  })

  return count
}
