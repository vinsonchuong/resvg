import React, { useRef } from 'react'
import { render } from 'react-dom'
import useSize from '../'

function Component() {
  const element = useRef(null)
  const size = useSize(element)

  return (
    <div
      ref={element}
      className="size"
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0'
      }}
    >
      {size && (
        <div>
          {size.width} x {size.height}
        </div>
      )}
    </div>
  )
}

render(<Component />, window.root)
