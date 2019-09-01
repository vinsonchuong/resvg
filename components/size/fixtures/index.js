import React from 'react'
import { render } from 'react-dom'
import Size from '../'

render(
  <Size
    className="size"
    style={{
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0'
    }}
    render={({ width, height }) => (
      <div>
        {width} x {height}
      </div>
    )}
  />,
  window.root
)
