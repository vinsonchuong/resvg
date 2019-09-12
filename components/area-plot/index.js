import React from 'react'
import { Coordinates } from '../../'

export default function AreaPlot({ points, ...props }) {
  return (
    <Coordinates.Context>
      {({ left, bottom, mapX, mapY }) => {
        const mappedPoints = points.map(([x, y]) => [mapX(x), mapY(y)])

        return (
          <g {...props}>
            <polygon
              stroke="none"
              points={[
                [left, bottom],
                ...mappedPoints,
                [mapX(points[points.length - 1][0]), bottom]
              ]
                .map(point => point.join())
                .join(' ')}
            />
            <polyline
              fill="none"
              points={mappedPoints.map(point => point.join()).join(' ')}
            />
          </g>
        )
      }}
    </Coordinates.Context>
  )
}
