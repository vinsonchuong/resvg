import React from 'react'
import { Coordinates } from '../../'

export default function GridLines({ x: xs = [], y: ys = [], ...props }) {
  return (
    <Coordinates.Context>
      {({ width, height, mapX, mapY }) => (
        <g strokeWidth={1} stroke="#000" shapeRendering="crispEdges" {...props}>
          {xs.map(x => (
            <line key={`x-${x}`} x1={mapX(x)} y1={0} x2={mapX(x)} y2={height} />
          ))}
          {ys.map(y => (
            <line key={`y-${y}`} x1={0} y1={mapY(y)} x2={width} y2={mapY(y)} />
          ))}
        </g>
      )}
    </Coordinates.Context>
  )
}
