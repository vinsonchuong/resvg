import { useState, useEffect } from 'react'

export default function(element) {
  const [style, setStyle] = useState(null)

  useEffect(() => {
    setStyle(window.getComputedStyle(element.current))
  }, [element])

  return style
}
