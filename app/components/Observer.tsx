export const createObserver = ({
  element,
  animationIn,
  animationOut,
  rootMargin = '0% 0% 0% 0%',
  threshold = 0,
  freeze = true,
}: {
  element: HTMLElement | Element
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
          animationIn(element)

          if (freeze) {
            observer.unobserve(element)
            return
          }
        } else {
          animationOut ? animationOut!(element) : null
        }
      })
    },
    { rootMargin, threshold }
  )
  observer.observe(element)
}
