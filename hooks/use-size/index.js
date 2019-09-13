import { useState, useRef, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export default function() {
  if (
    process.env.NODE_ENV === 'test' &&
    navigator.userAgent.includes('jsdom')
  ) {
    return [
      useRef(null),
      {
        width: 1000,
        height: 1000
      }
    ]
  }

  const [size, setSize] = useState(null)
  const element = useRef(null)

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      setSize({
        width: entries[0].contentRect.width,
        height: entries[0].contentRect.height
      })
    })
    resizeObserver.observe(element.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return [element, size]
}
