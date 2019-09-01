import React, { useState, useRef, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export default function Size({ render, ...props }) {
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

  return (
    <div {...props} ref={element}>
      {size && render(size)}
    </div>
  )
}
