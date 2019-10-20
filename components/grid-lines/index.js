import React from 'react'
import { Coordinates } from '../../'

GridLines.computePoints = ({ x: xs = [], y: ys = [] }) => [
  ...xs.map(x => [x, null]),
  ...ys.map(y => [null, y])
]

export default function GridLines({ x: xs = [], y: ys = [], ...props }) {
  return (
    <Coordinates.Context.Consumer>
      {({ top, bottom, left, right, mapX, mapY }) => (
        <g strokeWidth={1} stroke="#000" shapeRendering="crispEdges" {...props}>
          {xs.map(x => (
            <line
              key={`x-${x}`}
              x1={mapX(x)}
              y1={top}
              x2={mapX(x)}
              y2={bottom}
            />
          ))}
          {ys.map(y => (
            <line
              key={`y-${y}`}
              x1={left}
              y1={mapY(y)}
              x2={right}
              y2={mapY(y)}
            />
          ))}
        </g>
      )}
    </Coordinates.Context.Consumer>
  )
}
