import React, { createContext } from 'react'
import { useSize } from '../../'

const Context = createContext()
Svg.Context = Context.Consumer

export default function Svg({ children, ...props }) {
  const [element, size] = useSize()

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
