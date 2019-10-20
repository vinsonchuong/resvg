import React, { createContext, useRef } from 'react'
import { useSize } from '../../'

const Context = createContext()
Svg.Context = Context

export default function Svg({ children, ...props }) {
  const element = useRef(null)
  const size = useSize(element)

  return (
    <div {...props} ref={element}>
      {size && (
        <Context.Provider value={size}>
          <svg
            style={{ display: 'block' }}
            width={size.width}
            height={size.height}
          >
            {children}
          </svg>
        </Context.Provider>
      )}
    </div>
  )
}
