export const createObserver = ({
  element,
  animationIn,
  animationOut,
  rootMargin = '0% 0% 0% 0%',
  threshold = 0,
  freeze = true,
}: {
  element: HTMLElement | null
  animationIn: Function
  animationOut?: Function
  rootMargin: string
  threshold?: number
  freeze?: boolean
}) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animationIn()

          if (freeze) {
            observer.unobserve(element as Element)
            return
          }
        } else {
          animationOut ? animationOut!(element) : null
        }
      })
    },
    { rootMargin, threshold }
  )
  observer.observe(element as Element)
  return observer
}
