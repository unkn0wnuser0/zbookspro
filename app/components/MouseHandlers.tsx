import { Viewport } from '@react-three/fiber'
import { RefObject } from 'react'

export type ScrollParameters = {
  left: number
  last: number
  start: number
  ease: number
  current: number
  rounded: number
  multiplier: number
  isDown: boolean
  wrapperWidth: number
  number: number
}

const getCurrentCanvasPosition = (
  element: any,
  extra: number,
  delta: number,
  ease: number
) => {
  const current = element.position.x + extra - delta * ease
  element.position.x = current
  return current
}

export const smoothScrollCanvas = (
  wrapper: RefObject<HTMLDivElement>,
  scroll: ScrollParameters,
  elements: any[],
  viewportOffset: number,
  viewport: Viewport
) => {
  if (!wrapper.current) return

  const wrapperWidth =
    wrapper.current.getBoundingClientRect().width / viewport.factor

  scroll.last += (scroll.current - scroll.last) * scroll.ease
  scroll.rounded = Math.round(scroll.last * 100) / 100
  // const delta = Math.round((scroll.current - scroll.last) * 100) / 100
  const delta = scroll.current - scroll.last
  const offset = (viewport.width * viewportOffset) / 100

  if (!elements) return
  elements.forEach((item) => {
    if (!item.element && !item.image) return

    const positions = {
      image: getCurrentCanvasPosition(
        item.image,
        item.extra,
        delta,
        scroll.ease
      ),
      title: getCurrentCanvasPosition(
        item.title,
        item.extra,
        delta,
        scroll.ease
      ),
      description: getCurrentCanvasPosition(
        item.description,
        item.extra,
        delta,
        scroll.ease
      ),
    }

    const currentPosition = positions.image

    item.image.position.x = positions.image
    item.title.position.x = positions.title
    item.description.position.x = positions.description

    const relativePosition = {
      isBefore: currentPosition + item.image.scale.x * 1.5 + offset < 0,
      isAfter: currentPosition + offset > viewport.width,
    }

    if (
      currentPosition + item.image.scale.x * 1.5 + offset < 0 &&
      relativePosition.isBefore
    ) {
      item.title.position.x += wrapperWidth
      item.image.position.x += wrapperWidth
      item.description.position.x += wrapperWidth

      relativePosition.isBefore = true
      relativePosition.isAfter = false
    }
    if (currentPosition + offset > viewport.width && relativePosition.isAfter) {
      item.title.position.x -= wrapperWidth
      item.image.position.x -= wrapperWidth
      item.description.position.x -= wrapperWidth

      relativePosition.isBefore = false
      relativePosition.isAfter = true
    }
  })
  //   // const delta = scroll.current - scroll.rounded
  //   // const acceleration = delta / 1280
}

export const smoothScroll = (
  wrapper: RefObject<HTMLDivElement>,
  scroll: ScrollParameters,
  elements: any[],
  viewportOffset: number
) => {
  if (!wrapper.current) return
  scroll.last += (scroll.current - scroll.last) * scroll.ease
  scroll.rounded = (Math.round(scroll.last) * 100) / 100
  scroll.last = scroll.rounded
  const movement = -scroll.rounded

  if (!elements) return

  elements.forEach((item) => {
    if (!item.element) return

    item.element!.style.left = `${movement + item.extra}px`

    const position = item.element.getBoundingClientRect().x
    const relativePosition = {
      isBefore: position < 0,
      isAfter: position > window.innerWidth,
    }

    if (
      position > window.innerWidth - viewportOffset &&
      relativePosition.isAfter
    ) {
      item.extra -= scroll.wrapperWidth
      relativePosition.isAfter = true
      relativePosition.isBefore = false
    }

    if (
      position < 0 - viewportOffset - item.styles?.width! &&
      relativePosition.isBefore
    ) {
      item.extra += scroll.wrapperWidth
      relativePosition.isAfter = false
      relativePosition.isBefore = true
    }
  })

  //   // const delta = scroll.current - scroll.rounded
  //   // const acceleration = delta / 1280
}

export const onTouchDown = (
  event: any,
  wrapper: RefObject<HTMLDivElement>,
  scroll: ScrollParameters,
  aspect?: number | null
): void => {
  const { clientX } = event.changedTouches ? event.changedTouches[0] : event
  scroll.isDown = true
  wrapper.current!.classList.add('active')
  scroll.left = scroll.last
  scroll.start = clientX - scroll.last
}

export const onTouchUp = (
  wrapper: RefObject<HTMLDivElement>,
  scroll: ScrollParameters
) => {
  if (!wrapper) return
  scroll.isDown = false
  wrapper.current!.classList.remove('active')
}

export const onTouchMove = (
  event: any,
  scroll: ScrollParameters,
  aspect?: number | null
): void => {
  if (!scroll.isDown) return
  const { clientX } = event.changedTouches ? event.changedTouches[0] : event
  event.preventDefault()
  const x = clientX - scroll.last
  const walk = (x - scroll.start) * scroll.multiplier //scroll-fast

  scroll.current = scroll.left - walk
}

export const onWheel = (event: WheelEvent, scroll: ScrollParameters) => {
  scroll.current += event.deltaX * 0.25
}
