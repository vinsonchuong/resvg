import { useState, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export default function(element) {
  if (
    process.env.NODE_ENV === 'test' &&
    navigator.userAgent.includes('jsdom')
  ) {
    return {
      width: 1000,
      height: 1000
    }
  }

  const [size, setSize] = useState(null)

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

  return size
}
