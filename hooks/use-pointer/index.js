import { useEffect, useState } from 'react'

export default function(element) {
  const [pointer, setPointer] = useState(null)

  useEffect(() => {
    const boundElement = element.current

    function handlePointerMove(event) {
      const elementDimensions = boundElement.getBoundingClientRect()
      setPointer({
        x: event.clientX - elementDimensions.left,
        y: event.clientY - elementDimensions.top
      })
    }

    function handlePointerLeave() {
      setPointer(null)
    }

    boundElement.addEventListener('pointermove', handlePointerMove)
    boundElement.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      boundElement.removeEventListener('pointermove', handlePointerMove)
      boundElement.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return pointer
}
